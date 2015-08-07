(function(global, D){
	'use strict';

	function proxy(fn, owner) {
		return function() {
			fn.apply(owner, arguments);
		}
	}

	/**
	 * --------------------------------
	 * 아래 코드 선언보다 좋은 예
	 * 초기 실행 시, 브라우저 지원도에 따라
	 * 적합한 함수를 설정.
	 * --------------------------------
	 */

	var addEvent = (function(){
		if(global.addEventListener) {
			return function(el, type, fn, capture) {
				el.addEventListener( type, fn, (capture || false) );
			}
		} else if(global.attachEvent) {
			return function(el, type, fn) {
				el.attachEvent( 'on' + type, fn );
			};
		} else {
			return function(el, type, fn) {
				el['on'+type] = fn;
			};
		}
	})();

	var removeEvent = (function(){
		if(global.removeEventListener) {
			return function(el, type, fn, capture) {
				el.removeEventListener( type, fn, (capture || false) );
			}
		} else if(global.detachEvent) {
			return function(el, type, fn) {
				el.detachEvent( 'on' + type, fn );
			};
		} else {
			return function(el, type, fn) {
				el['on'+type] = null;
			};
		}
	})();

	/**
	 * --------------------------------
	 * 위 코드 선언보다 안 좋은 예
	 * 매번 함수 실행 시, 조건 확인
	 * --------------------------------
	 */

	// function addEvent(el, type, callback, capture) {
	// 	if( el.addEventListener ) {
	// 		// W3C Standard
	// 		el.addEventListener( type, callback, (capture || false) )
	// 	} else if ( el.attachEvent ) {
	// 		// MS IE NonStandard
	// 		el.attachEvent( 'on' + type, callback );
	// 	} else {
	// 		el['on'+type] = callback;
	// 	}
	// }

	// function removeEvent(el, type, callback, capture) {
	// 	if( el.removeEventListener ) {
	// 		// W3C Standard
	// 		el.removeEventListener( type, callback, (capture || false) )
	// 	} else if ( el.detachEvent ) {
	// 		// MS IE NonStandard
	// 		el.detachEvent( 'on' + type, callback );
	// 	} else {
	// 		el['on'+type] = null;
	// 	}
	// }

	// dom.events 객체
	D.events = {
		'addEvent'    : addEvent,
		'removeEvent' : removeEvent,
		'proxy'       : proxy,
	};

})(window, (dom = window.dom || {}) );