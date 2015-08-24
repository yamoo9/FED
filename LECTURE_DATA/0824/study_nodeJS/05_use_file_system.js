/**
 * --------------------------------
 * Node.js의 내장 모듈
 * File System 모듈 사용
 * --------------------------------
 */

var fs   = require('fs'),
	type = require('checkType');

console.log( type(fs) );
console.log( fs );