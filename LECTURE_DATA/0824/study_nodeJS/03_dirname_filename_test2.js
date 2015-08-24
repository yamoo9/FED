// 파일 이름, 폴더 이름 출력
var getFilename = require('./modules/getFilename'),
	getDirname  = require('./modules/getDirname');

console.log( getFilename(__filename)+'\n', getDirname(__dirname) );