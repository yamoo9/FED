/*! main.js © yamoo9.net, 2015 */

;(function(global, $, undefined){
	'use strict';

	var $body = $('body').addClass('index-page');

	console.log($body); // ????

	$body.addClass(function(index, current_classname) {
		console.log(current_classname.split(' '));
		// console.log(
		// 	'index: ', index,
		// 	'\ncurrent_classname: ', current_classname
		// );
	});

})(window, window.jQuery);