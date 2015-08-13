/*! main.js © yamoo9.net, 2015 */

// $.noConflict()
// $ 별칭(Alias)을 jQuery 라이브러리가 놓아준다(포기한다).
// 다른 JS 라이브러리($를 별칭으로 사용하는)와의 충돌을 방지하기 위한 목적
// $ 변수(별칭)을 다른 변수에 위임
var $j = $.noConflict();

console.log( $j().jquery );


// .noConflict()에 true를 전달하면
// $ 별칭 뿐만 아니라, jQuery 변수조차 포기한다.
var y9 = {};
y9.$ = jQuery.noConflict( true );

console.log(y9.$);


// window.jQuery에 직접 접근하여 팩토리함수를 실행,
// $()에 전달된 함수 리터럴 전달인자로 $를 적용하여
// 함수 리터럴 영역 내에서는 $가 jQuery로서 활용된다.
y9.$(function($) {

});

(function(global, $, undefined){
	'use strict';

	$(function() {
		// <body> 요소 화면에서 숨기기(display: none)
		// 이어서 화면에 보여주기(display: block)
		$('body')
			// jQuery Effects
			.hide(100)
			.show(100)
			.hide(100)
			.show(100)
			.hide(100)
			.show(100)
			.hide(100)
			.show(100)
			.hide(100)
			.show(100)
			.hide(100)
			.show(100);
	});

})(window, window.y9.$);