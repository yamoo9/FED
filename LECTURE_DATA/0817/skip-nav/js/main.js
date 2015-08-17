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

	$skip_links.on('click', function(e) {
		// 브라우저 기본 동작 차단
		e.preventDefault();

		// 포커스가 이동해야 할 목적지?
		// e.target <a href="#header">
		var $target = $(e.target.getAttribute('href'));
		$target.attr('tabindex', -1).focus();
	});


})(window, window.jQuery);