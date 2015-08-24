// console.log('전역에서 경로 출력:\n', __dirname+'\n', __filename);

/*------------------------------------------------------------------------*/

/*
	Module 배포(Exports)
		함수를 담은 JS 파일을 별도로 생성

	Module 호출(Require)
		다른 JS 파일에서 호출하고자하는 파일을 불러들이는 것.
		require('JS 파일 경로');

		※ 파일 호출 시, 확장자는 생력 가능하다.
 */
var checkPlatform = require('./modules/checkPlatform'),
	getDirname    = require('./modules/getDirname'),
	getFilename   = require('./modules/getFilename');

// console.log(checkPlatform); // ????

// console.log( checkPlatform.isOSX() );

console.log( getDirname(__dirname) );
console.log( getFilename(__filename) );