/**
 * --------------------------------
 * Node.js의 내장 모듈
 * File System 모듈 사용
 * --------------------------------
 */

var fs = require('fs');

console.log('======================================\n', '시작: 파일 읽기!!!');

// 비동기(Asynchronous) 호출
fs.readFile(

	// 읽고자 하는 파일이름 (String)
	'./01_dirname_filename.js',

	// 옵션 (Object)
	{'encoding': 'utf-8'},

	// 콜백 (Function)
	function(err, data) {
		if ( err ) { throw err.message; }
		console.log('======================================\n', '비동기 호출:\n', data);
	}

);

// 동기(Synchronous) 호출
var readed = fs.readFileSync('03_checkType_test.js', 'utf-8');
console.log('동기 호출:\n', '======================================\n', readed);

console.log('======================================\n', '끝: 파일 읽기!!!');