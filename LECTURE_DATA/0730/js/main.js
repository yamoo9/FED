/*! main.js © yamoo9.net, 2015 */

(function(global, _){
	'use strict';

	var nav_links = _.$('nav a');

	// Closure 사용 예 ------------------------------------------

	for(var i=0, l=nav_links.length; i<l; i++) {

		var item = nav_links[i];

		function s1(indx) {
			// s1 영역
			// indx(i)

			function s2() {
				// s2 영역

				console.log(indx);
				return false;
			}

			// s2 반환
			return s2;
		}

		var s2 = s1(i); // s2 반환

		item.onclick = s2;
	}

	// IIFE 패턴 사용 예 ------------------------------------------

	for(var i=0, l=nav_links.length; i<l; i++) {

		var item = nav_links[i];

		item.onclick = (function(idx){
			// 클릭하면 클로저 함수가 실행된다.
			return function() {
				console.log(idx);
				return false;
			}
		})(i);

	}

})(window, window.yamoo9);