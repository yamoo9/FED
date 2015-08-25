/**
 * --------------------------------
 * CommonJS 방식의 모듈 호출
 * Browserify로 웹에서 사용가능하도록 변경
 * --------------------------------
 */
var uniqueID  = require('yamoo9-unique-id'),
	$         = require('jquery');

require('jquery-boom/boom');


/**
 * --------------------------------
 * jQuery Code
 * --------------------------------
 */
$('body')
	.css({
		'background': 'red',
		'color': 'snow'
	})
	.attr({
		'class': 'using-jquery'
	})
	.append('<p>'+ uniqueID() +'</p>');

console.log(!!$.fn.boom);