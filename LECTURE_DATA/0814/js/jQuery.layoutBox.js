/*! jquery.layoutBox.js © yamoo9.net, 2015 */
(function(global, $, undefined){
	'use strict';

	var box_obj_default = {
		'box'        : '<div>',
		'width'      : 100,
		'height'     : 100,
		'background' : '#0f0f0f',
		'color'      : '#fff',
		'html'       : '<span>Box</span>',
	};

	$.layoutBox = function($container, box_obj) {

		// 객체의 속성을 덮어쓰기 $.extend() 사용
		var settings = $.extend(box_obj_default, box_obj);

		// $box 요소 생성
		var $box = $(settings.box, {
			'class': 'box',
			'css': {
				'width'      : settings.width + 'px',
				'height'     : settings.height + 'px',
				'background' : settings.background,
				'color'      : settings.color,
			},
			'html': settings.html
		}).appendTo($container);

	};

})(window, window.jQuery);