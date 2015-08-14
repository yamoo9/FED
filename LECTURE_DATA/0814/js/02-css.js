/*! jQuery().css() © yamoo9.net, 2015 */
(function(global, $, undefined){
	'use strict';

	/**
	 * --------------------------------
	 * 문서 객체 참조 (jQuery 인스턴스 객체)
	 * --------------------------------
	 */
	var $app       = $('#app'),
		$app_child = $app.children('.app-child');

	// console.log($app, $app_child);

	// GET
	var app_padding_left   = $app.css('padding-left'), // 19.2px
		app_padding_right  = $app.css('padding-right'),
		app_padding_bottom = $app.css('padding-bottom'),
		app_padding_top    = $app.css('padding-top');


	// PX2EM
	function px2em(value, base) {
		base = base || 16;
		return parseFloat(value)/base + 'em';
	}

	// EM2PX
	function em2px(value, base) {
		base = base || 16;
		return parseFloat(value) * base + 'px';
	}

	// PX
	// console.log( 'app_padding_left: ', app_padding_left );
	// console.log( 'app_padding_right: ', app_padding_right );
	// console.log( 'app_padding_bottom: ', app_padding_bottom );
	// console.log( 'app_padding_top: ', app_padding_top );

	// EM
	// console.log( 'app_padding_left: ', px2em(app_padding_left) );
	// console.log( 'app_padding_right: ', px2em(app_padding_right) );
	// console.log( 'app_padding_bottom: ', px2em(app_padding_bottom) );
	// console.log( 'app_padding_top: ', px2em(app_padding_top) );

	// SET
	// 속성을 개별적으로 적용한 사례
	$app_child
		.css('font-size', px2em('100px') )
		.css('position', 'absolute')
		.css('top', '10px')
		.css('right', '30px');

	// 속성 맵(Map: Object)을 적용한 사례
	var app_css_map = {
		'border-radius'    : '5px',
		'background-image' : 'linear-gradient(-90deg, #FC4A54, #841C26)',
	};

	$app.css(app_css_map);


	// GET Properties
	var app_css_props       = $app.css(['position', 'z-index', 'opacity']),
		app_child_css_props = $app_child.css(['float', 'margin-right', 'outline']);

	// for ~ in 문으로 객체 속성 탐색
	for(var prop in app_css_props) {
		var value = app_css_props[prop];
		console.log('prop: ' + prop + ', ' + 'value:', value);
	}

	for(var prop in app_child_css_props) {
		var value = app_child_css_props[prop];
		console.log('prop: ' + prop + ', ' + 'value:', value);
	}

	// 전역에 공개
	global.px2em = px2em;
	global.em2px = em2px;

})(window, window.jQuery);