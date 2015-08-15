/*! main.js © yamoo9.net, 2015 */
(function(global, $, undefined){
	'use strict';

	/**
	 * jQuery.layoutBox.js 활용
	 * --------------------------------
	 */
	var $box_layout_area = $('.box-layout-area');

	$.layoutBox($box_layout_area, {
		'color' : 'hotpink',
		'left'  : 30,
		'top'   : 60
	});

	$.layoutBox($box_layout_area, {
		'color'  : '#f57452',
		'width'  : 100,
		'height' : 60,
		'left'   : 250,
		'top'    : 30
	});

	$.layoutBox($box_layout_area, {
		'background' : '#505050',
		'width'      : 210,
		'height'     : 80,
		'left'       : 250,
		'top'        : 100
	});


})(window, window.jQuery);