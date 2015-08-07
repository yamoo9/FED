/*! main.js © yamoo9.net, 2015 */

(function(global, doc){
	'use strict';

	function proxy(fn, owner) {
		return function() {
			fn.apply(owner, arguments);
		}
	}

	function on(target, type, callback) {
		var data_type = callback.constructor;

		switch(data_type) {
			case Function:
				target['on'+type] = callback;
			break;

			case Array:
				target['on'+type] = function() {
					callback.forEach(function(fn) {
						fn();
					});
				};
			break;

			default:
				console.error('함수 또는 배열 데이터를 전달해주세요.');
		}
	}

	var clicked1 = function() {
		console.log(this, arguments, 'clicked document');
	};

	var clicked2 = function() {
		console.log(this, arguments,'clicked double document element');
	};

	/**
	 * --------------------------------
	 * 구형 이벤트 모델
	 * 다수의 핸들러(함수)를 연결하면...
	 * 마지막 핸들러만 처리 됨.
	 * --------------------------------
	 */

	// on(doc, 'click', clicked2); // 1개만 이벤트가 설정됨.

	// custom proxy()
	// on(doc, 'click', [proxy(clicked1, window), proxy(clicked2, navigator)]); // 2개 이벤트가 설정됩니다.

	// native .bind()
	// on(doc, 'click', [clicked1.bind(window), clicked2.bind(navigator)]);


	/**
	 * --------------------------------
	 * 진보 이벤트 모델
	 * 다수의 핸들러(함수)를 연결해도 모두 처리됨.
	 * addEventListener(type, fn, capture)
	 * removeEventListener(type, fn, capture)
	 * --------------------------------
	 */

	var a = 0;

	// doc.addEventListener('click', function() {
	// 	console.log('click' + ++a);
	// });
	// doc.addEventListener('click', function() {
	// 	console.log('click' + ++a);
	// });
	// doc.addEventListener('click', function() {
	// 	console.log('click' + ++a);
	// });
	// doc.addEventListener('click', function() {
	// 	console.log('click' + ++a);
	// });
	// doc.addEventListener('click', function() {
	// 	console.log('click' + ++a);
	// });
	// doc.addEventListener('click', function() {
	// 	console.log('click' + ++a);
	// });
	// doc.addEventListener('click', function() {
	// 	console.log('click' + ++a);
	// });
	// doc.addEventListener('click', function() {
	// 	console.log('click' + ++a);
	// });
	// doc.addEventListener('click', function() {
	// 	console.log('click' + ++a);
	// });
	// doc.addEventListener('click', function() {
	// 	console.log('click' + ++a);
	// });
	// doc.addEventListener('click', function() {
	// 	console.log('click' + ++a);
	// });




	/**
	 * --------------------------------
	 * MS IE 8- 비표준 진보 이벤트 모델
	 * 버블링만 지원.
	 * attachEvent(ontype, fn)
	 * detachEvent(ontype, fn)
	 * --------------------------------
	 */

	// doc.attachEvent('onclick', clicked1);
	// doc.detachEvent('onclick', clicked1);


	// doc.onclick = function() {
	// 	// Custom
	// 	// proxy(clicked1, doc)();
	// 	// proxy(clicked2, doc.body)(doc, doc.head, doc.body);

	// 	// Native
	// 	clicked1.bind(doc)();
	// 	clicked1.bind(doc.body)(doc, doc.head, doc.body);
	// };

	// var body = doc.body;

	// // 구형 이벤트 모델
	// global.onload = init;

	// function init() {
	// 	body.style.cssText = 'height: 100vh; background: #FC414B;';
	// }

	// // 신형 이벤트 모델 (W3C 표준)
	// // 이벤트 유형 (on을 제거합니다)
	// // 이벤트 핸들러 (이벤트 발생하면 실행)
	// // 이벤트 흐름 캐치 (캡쳐링|버블링)
	// // .addEventListener(type, callback[, capture])
	// doc.addEventListener('click', removeAllStyles.bind(body), false);

	// function removeAllStyles() {
	// 	// console.log(this);
	// 	this.style.cssText = '';
	// }

})(window, window.document);