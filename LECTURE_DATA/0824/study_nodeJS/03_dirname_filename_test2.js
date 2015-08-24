// 파일 이름, 폴더 이름 출력
var getFilename = require('./modules/getFilename'),
	getDirname  = require('./modules/getDirname'),
	checkType   = require('./modules/checkType');

// console.log( getFilename(__filename)+'\n', getDirname(__dirname) );

var resultData = checkType(90);

console.log(resultData);