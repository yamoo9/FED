/*! main.js © yamoo9.net, 2015 */
(function(global, $, undefined){
	'use strict';

	/**
	 * --------------------------------
	 * 문서 객체 참조
	 * --------------------------------
	 */
	var $skip_navigation = $('#skip-navigation');

	// var $skip_nav_links = $skip_navigation.find('a').wrapAll('<ul>').wrap('<li>');

	// $skip_nav_links.addClass('a11y-hidden focusable');

	var $skip_links = $skip_navigation
		.addClass('skip-content')
		.find('a').addClass('a11y-hidden focusable');

	console.log($skip_links); // [a, a, a]


})(window, window.jQuery);