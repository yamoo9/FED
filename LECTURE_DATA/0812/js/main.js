/*! main.js © yamoo9.net, 2015 */

/**
 * ----------------------------------------------------------------------
 * 전역에서 jQuery를 사용할 경우, 주의점.
 * ----------------------------------------------------------------------
 * 전역에서 jQuery를 사용하려면 별칭인 $가 아니라, jQuery를 사용해야 합니다.
 * $를 사용하면 $를 별칭으로 사용하는 다른 JS 라이브러리와 충돌이 일어날 수 있기 때문입니다.
 * ----------------------------------------------------------------------
 */

// IIFE 패턴으로 전역과 구분되는 지역을 만들어 코드를 작성하는 습관을 가지세요.
(function(global, $, undefined){
	'use strict';

	/**
	 * jQuery 존재 유무 확인
	 * --------------------------------
	 */
	// 결과가 true라면 현재 문서는 jQuery를 사용할 수 있습니다.
	console.log($ === jQuery);


	/**
	 * jQuery 팩토리 함수
	 * DOM 객체 전달
	 * --------------------------------
	 */
	global.doc = $(document); // jQuery Object Instance
	global.body = $(document.body);



})(window, window.jQuery);