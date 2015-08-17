/*! main.js © yamoo9.net, 2015 */
;(function(global, $, undefined){
	'use strict';

	var $page = $('#page'),
		// $post = $page.children('.post');
		$post = $('.post', $page);

	// $post.filter(':gt(0)').append('<a href="#">go to Top</a>');

	$post.filter(function(index, el) {

		// jQuery
		var win_h       = $(window).height(),
			$el         = $(el),
			el_offset_h = $el.offset().top + $el.outerHeight(true);
		if( win_h < el_offset_h ) { return true; }

		// Native
		// var win_h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
		// 	el_offset_h = el.offsetTop + el.offsetHeight;
		// if ( el_offset_h > win_h ) { return true; }

		// if(index > 0) {
		// 	return true;
		// } else {
		// 	return false;
		// }

	}).append('<a href="#">go to Top</a>');

	// --------------------------------------------------------

	// $('<a href="#">go to Top</a>').appendTo('.post:gt(0)');

})(window, window.jQuery);