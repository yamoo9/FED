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
	console.log( 'app_padding_left: ', app_padding_left );
	console.log( 'app_padding_right: ', app_padding_right );
	console.log( 'app_padding_bottom: ', app_padding_bottom );
	console.log( 'app_padding_top: ', app_padding_top );

	// EM
	console.log( 'app_padding_left: ', px2em(app_padding_left) );
	console.log( 'app_padding_right: ', px2em(app_padding_right) );
	console.log( 'app_padding_bottom: ', px2em(app_padding_bottom) );
	console.log( 'app_padding_top: ', px2em(app_padding_top) );

})(window, window.jQuery);