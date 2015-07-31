/*! main.js © yamoo9.net, 2015 */

/**
 * --------------------------------
 * JS Legacy Event
 *
 * Interface Events
 * load
 * resize
 * scroll
 *
 * --------------------------------
 */

// 즉시 실행하는 함수 (스코프 함수)
// 캡슐화 (다른 코드와 충돌 방지)
(function(global, $){
	'use strict';

	// global 객체 이벤트 연결
	global.onload = uiInit;

	/**
	 * --------------------------------
	 * UI 초기화 시에 수행되는 함수
	 */
	function uiInit() {

		// 동적으로 콘텐츠를 추가하는 함수 실행
		dynamicAddContents();

		// 이벤트 연결
		this.onscroll = checkEventScroll;
	}

	/**
	 * --------------------------------
	 * 이벤트 핸들러 (함수 모음)
	 */
	function checkEventScroll() {
		console.log(this === global);
		console.log(this === window);
	}

	function dynamicAddContents() {
		// <body> 요소에 동적으로 콘텐츠를 만들어 붙인다.

		// <div id="app"> 요소 생성
		var body = $.$('body'),
			app  = $.createEl('div');

		$.attr( app, 'id', 'app' );
		$.prepend( body, app );

	}


})(window, window.yamoo9);