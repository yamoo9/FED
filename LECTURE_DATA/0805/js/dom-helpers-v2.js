/*! dom-helpers.js © yamoo9.net, 2015 */

// Javascript Module Pattern
// IIFE :: 즉시 실행 함수
// (function(){}())
// +function(){}()
// -function(){}()
// !function(){}()
// ~function(){}()

// 전역: Global Scope
// 전역 변수 dom에 즉시 실행함수가 반환하는 클로저 객체를 참조
var dom = (function(){
	// 지역: Local Scope

	// 외부에서 접근이 불가능한 비공개 멤버(Private Member)
	function createEl(el_name) {
		return document.createElement(el_name);
	}

	// 외부에서 접근이 가능한 공개 멤버(Public Member)
	// GET 방식 사용법: dom.html(document.body);
	// SET 방식 사용법: dom.html(document.body, '<div>hey</div>');
	function html(target, html_code) {
		// GET
		if ( !html_code ) {
			return target.innerHTML;
		}
		// SET
		else {
			target.innerHTML = html_code;
		}
	}

	// 반환되는 객체 또는 함수는 클로저(Closure)
	return {
		'html': html
	}

})();