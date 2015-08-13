/*! main.js © yamoo9.net, 2015 */

;(function(global, $, undefined){
	'use strict';

	var body_alias = 'body-is-context';

	// .addclass()에 문자열을 적용하는 예
	// var $body = $('body').addClass( 'index-page' );                           // 단일 클래스 설정
	// var $body = $('body').addClass( 'index-page bodyis bodiids' );            // 멀티 클래스 설정
	var $body = $('body').addClass( body_alias || 'index-page bodyis bodiids' ); // 조건 처리 후 설정

	// console.log($body); // jQuery(body)


	// .addClass()에 함수를 적용하는 예 (특정 조건을 확인한 후, 클래스 속성을 추가할 경우)
	$body
		// class 속성 추가에 특화된 메소드 .addClass()
		.addClass(function(index, current_classname) {
			var addclass = '';

			// 조건이 맞으면 추가하고자 하는 클래스를 설정
			if( current_classname.indexOf('main') > -1 ) {
				addclass = 'intro';
			}

			return addclass; // 반환된 문자열이 클래스 속성 값으로 추가
		})
		// 다른 속성 추가에 사용되는 메소드 .attr()
		.attr('data-context', 'body');

})(window, window.jQuery);