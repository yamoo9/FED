/*! main.js © yamoo9.net, 2015 */
(function(global, $, undefined){
	'use strict';

	// Hold jQuery Ready Event
	// 레디 이벤트를 실행하지 않고 잡아 둠.
	jQuery.holdReady(true);

	// jQuery Ready 구문
	// </body> 해석 이후 실행 됨.
	// DOMContentLoaded 이벤트와 유사하게 처리.

	// $(document).ready(function() {
	// $(function(){}); ← 이처럼 줄여 사용하는 것도 가능.


	/**
	 * jQuery 팩토리 함수(Factory Function)
	 * ------------------------------------
	 * ElementNode, NodeList
	 * Node.... window, document...
	 * Empty Object {}
	 * CSS Selector [String]
	 * jQuery Instance Object
	 * Function ---> $().ready() 축약 형태의 코드
	 */

	// jQuery 팩토리 함수에 init 함수 전달.
	$(init);


	// Ready 이벤트 발생 시, 실행될 init 함수 정의
	function init() {

		/**
		 * 변수 이름 앞에 $를 붙이는 이유?!
		 * ---------------------------------------------------------------------
		 * jQuery() 팩토리 함수를 통해 생성된 jQuery 인스턴스 객체임을 명시적으로 표기하기 위함.
		 * 반드시 그렇게 해야 하는 것은 아니지만... 관례적으로 이와 같이 사용함.
		 * 고로 jQuery 인스턴스 객체를 변수에 할당할 경우, $를 이름 앞에 붙이길 권장.
		 */
		var $body = $('body'); // 반환된 jQuery 인스턴스 객체를 변수에 캐시(Cache)

		console.log($body); // jQuery(body) ← 반환된 jQuery 인스턴스 객체

		// jQuery 인스턴스 객체는 인스턴스 메소드인 .addClass()를 활용 가능.
		// 인스턴스는 jQuery.prototype의 능력을 모두 사용할 수 있다.
		// ※ jQuery 인스턴스 객체는 jQuery 프로토타입 객체에 연결(Link)되어 있다.
		$body.addClass('index-page');

	}

	// 2초 뒤에 붙잡아둔(hold) ready 이벤트에 연결된 함수를 실행.
	global.setTimeout(function() {
		$.holdReady(false);
	}, 2000);

})(window, window.jQuery);