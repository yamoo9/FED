/**
 * --------------------------------
 * CommonJS 방식의 모듈 호출
 * Browserify로 웹에서 사용가능하도록 변경
 * --------------------------------
 */
var uniqueID       = require('yamoo9-unique-id'),
	$              = require('jquery'),
	showMessageBox = require('./yamoo9/showMessageBox');

// 플러그인 호출
require('jquery-boom/boom');

// 외부에서 접근 가능한 변수 설정
// global.jQuery = global.$ = $;


/**
 * --------------------------------
 * jQuery Code
 * --------------------------------
 */

$('body')
	.css({
		'background' : 'red',
		'color'      : 'snow',
	})
	.attr({
		'class': 'using-jquery',
		'id'   : 'body-id-' + uniqueID(),
	});

// console.log(!!$.fn.boom);