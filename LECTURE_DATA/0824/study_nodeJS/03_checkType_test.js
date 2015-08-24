/**
 * --------------------------------
 * 모듈 호출
 * --------------------------------
 */
var getFilename = require('./modules/getFilename'),
	getDirname  = require('./modules/getDirname'),
	checkType   = require('./modules/checkType');

/**
 * 모듈 사용
 * --------------------------------
 */
var d_name = getDirname(__dirname);
var f_name = getFilename(__filename);

console.log( f_name + '\n', d_name );

var data       = 'Node.js 환경에서 모듈 관리 방법을 공부했습니다.',
	resultData = checkType( data );

console.log(resultData); // 'string'