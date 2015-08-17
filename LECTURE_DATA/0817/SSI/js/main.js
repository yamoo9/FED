/*! main.js © yamoo9.net, 2015 */
(function(global, $, undefined){
	'use strict';

	var $gnb       = $('#gnb'),
		$gnb_links = $('a', $gnb);

	$gnb_links
		.wrapAll('<ul>').wrap('<li>')
			.parents('ul').unwrap().wrap('<nav id="gnb">')
				.find('a').wrapInner('<span>');

})(window, window.jQuery);