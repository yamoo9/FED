/*! main.js © yamoo9.net, 2015 */
(function(global, $, undefined){
	'use strict';

	/**
	 * jQuery.centerBox.js 활용
	 * --------------------------------
	 */
	var $box_layout_area = $('.box-layout-area');


	$.layoutBox($box_layout_area);


	$.layoutBox($box_layout_area, {
		'html'       : '<div>box design</div>',
		'width'      : 50,
		'height'     : 100,
		'background' : '#ff0',
		'color'      : 'red'
	});


})(window, window.jQuery);