/*! main.js © yamoo9.net, 2015 */

/**
 * --------------------------------
 * Scope, Hoist
 * 영역, 끌어올리다.
 *
 * 호이스트란?
 * var, function  키워드를 가진 문장이 영역 최상단으로 끌어올려지는 것을 말한다.
 *
 * debugger
 * 중단점(개발도구 Breakpoint)
 * 가급적 도구에서 사용할 것.
 * 코드 내에 삽입하지 말 것.
 * --------------------------------
 */

// 전역(Global Scope)
// 변수, 함수 선언

// fn1(); // hoist 현상으로 오류가 발생한다.

fn2();

// 함수 표현식(Function Expression)
var fn1 = function() { console.log('this is fn1 function.'); };

// fn1(); // 정상 수행된다.

// 함수 선언식(Function Declaration)
function fn2() {
	console.log('this is fn2 function.');
}


/**
 * --------------------------------
 * Scope
 * Global vs Local
 * --------------------------------
 */

// 전역 공간 - window

function localScope() {
	// 지역 공간 - 함수 내부

	function inLocalScope() {
		// 지역 내부의 지역 공간 - 함수 내부의 함수 공간

	}

}