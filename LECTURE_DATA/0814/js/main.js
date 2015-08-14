/*! jQuery().width(), jQuery().height() © yamoo9.net, 2015 */
(function(global, $, undefined){
	'use strict';

	/**
	 * --------------------------------
	 * 문서 객체 참조
	 * --------------------------------
	 */
	var $app = $('#app');

	// GET: Content Box 까지만 가져옴.
	var app_height = $app.height(),
		app_width  = $app.width();

	// console.log(app_height, app_width);

	// SET
	$app.height(500)
		.width(function(index, width) {
			var height = $(this).height() * 1.8;
			return height;
		})
		.css('line-height', function(index, value){
			return $(this).height() + 'px';
		});

})(window, window.jQuery);