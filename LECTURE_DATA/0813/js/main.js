/*! main.js © yamoo9.net, 2015 */

;(function(global, $, undefined){
	'use strict';

	// .addclass()에 문자열을 적용하는 예
	var $body = $('body').addClass('index-page');

	// console.log($body); // jQuery(body)


	// .addClass()에 함수를 적용하는 예 (특정 조건을 확인한 후, 클래스 속성을 추가할 경우)
	$body.addClass(function(index, current_classname) {
		var addclass = '';

		// 조건이 맞으면 추가하고자 하는 클래스를 설정
		if( current_classname.indexOf('main') > -1 ) {
			addclass = 'intro';
		}

		return addclass;
	});

})(window, window.jQuery);