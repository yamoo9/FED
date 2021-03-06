/*!
 * combineJS © yamoo9.net, 2015
 * 여러 개의 자바스크립트 파일을 하나의 자바스크립트 파일로 병합하는 일을 수행합니다.
 */
'use strict';

var fs     = require('fs'),
	minify = require('minify'),
	type   = require('yamoo9-check-type');

// 모듈 배포
module.exports = function(input, output, min, encoding) {

	var input_type = type(input);

	// [유효성 검사] 병합 가능한 파일인지 확인 절차.
	// input 데이터 유형은 반드시 문자열 또는 배열 형만 가능.
	if( input_type !== 'string' && input_type !== 'array' ) {
		throw console.error('병합하고자 하는 JS 파일 문자열 또는 리스트(배열)를 전달해야 합니다.');
	}

	// [데이터 유형 체크/변경] input 데이터 유형이 문자열일 경우, 리스트(배열) 데이터 형으로 변경.
	if( input_type === 'string' ) {
		// input.map()은 각 아이템(원소)마다 처리된 결과로 새롭게 구성된 배열 반환
		// 새롭게 구성된 배열을 다시 input 변수에 참조
		input = input.split(',').map(function(item, index) {
			return item.trim();
		});
	}

	// 압축 유무 확인
	min = (
			type(min) === 'null' ||
			type(min) === 'undefined' ||
			min === true
		) ? true : false;

	// 아웃풋 디렉토리 경로 확인
	var output_dir = output.split('/');
	output_dir = output_dir.slice(0, output_dir.length - 1).join('/');

	// 병합되는 문자 데이터 변수
	var combine_data = '',
		options      = {'encoding': ( encoding || 'utf-8' ) };

	// 아웃풋 디렉토리 생성
	fs.mkdir(output_dir, function() {

		// input === javascript files
		input.forEach(function(file, index) {

			// [읽기] 병합하고자 하는 파일 리스트
			fs.readFile(file, options, function(err, data) {

				// 파일 내용 병합 => combine_data
				combine_data += data+'\n\n';

				// [쓰기] 병합되어 완성된 파일
				if(index === input.length - 1) {
					fs.writeFileSync(output, combine_data, options);
				}

			});

		}); // forEach 종료

		// 압축 유무 처리
		if ( min ) {

			minify(output, function(error, data) {
				if (error) { throw console.error(error.message); }
				output_rename = output.replace('.js', '.min.js');
				fs.writeFileSync(output_rename, data, options);
			});
		}

	});

}