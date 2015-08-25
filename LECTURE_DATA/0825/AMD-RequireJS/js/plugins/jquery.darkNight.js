// AMD Pattern
// define() 함수
// require() 함수

define([
	'jquery.utils'
],
function() {
	'use strict';

	// darkNight 스타일 추가
	$('<link>', {
		'id'   : 'dark-night',
		'rel'  : 'stylesheet',
		'href' : 'js/plugins/jquery.darkNight.css'
	})
	.insertAfter('link:eq(0)');

	// Letter 초기 옵션
	var letters = {
		'first' : 'DARK',
		'last'  : 'NIGHT',
	};

	// darkNight 템플릿
	var dark_night_tempate = [
		'<div id="box">',
			'<p id="flashlight">',
				'<span id="flash">'+ letters.first +'</span>',
				'<span id="light">'+ letters.last +'</span>',
			'</p>',
		'</div>'].join('');

	// darkNight 마크업 추가
	$(dark_night_tempate).prependTo('body');

});