// combineJS 모듈 호출
var combineJS = require('combineJS');


// 전달인자가 문자열일 경우 처리
combineJS('js/dom-helper.js, js/util.js, js/app.js', './js/output/bundle.js');

// 전달인자가 리스트(배열)일 경우 처리
combineJS(
	// [읽기] 병합하고자 하는 파일 리스트
	[
		'js/dom-helper.js',
		'js/util.js',
		'js/app.js',
	],
	// [쓰기] 병합되어 완성된 파일
	'./js/output/bundle.js'
);