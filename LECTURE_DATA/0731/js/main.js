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

		global.body = $.$('body');

		// 동적으로 콘텐츠를 추가하는 함수 실행
		dynamicAddContents();

		// 이벤트 연결
		this.onscroll = checkEventScroll;
		// 이벤트에 연결된 함수 실행
		this.onscroll();
	}

	/**
	 * --------------------------------
	 * 이벤트 핸들러 (함수 모음)
	 */
	function checkEventScroll() {
		// 스크롤된 높이 값 출력
		var scrollY     = this.scrollY || global.body.scrollTop;
		var scroll_info = $.$('.show-scroll-info');
		$.text( scroll_info, scrollY );
	}

	function dynamicAddContents() {
		// <body> 요소에 동적으로 콘텐츠를 만들어 붙인다.

		// ----------------------------------------------------
		// <div id="app"> 요소 생성
		var app  = $.createEl('div');

		$.attr( app, 'id', 'app' );
		$.prepend( global.body, app );

		// ----------------------------------------------------
		// <header> 요소 생성
		var header = $.createEl('header');

		$.prepend( app, header );

		// ----------------------------------------------------
		// <h1> 요소, 텍스트 노드 생성 생성
		var header_h1     = $.createEl('h1'),
			header_h1_txt = $.createText('hi everyone!! :-)');

		$.prepend( header_h1, header_h1_txt );
		$.append( header, header_h1 );

		// <span class="show-scroll-info">
		var scroll_info = $.createEl('span');
		$.addClass( scroll_info, 'show-scroll-info' );

		$.append( global.body, scroll_info );

	}


})(window, window.yamoo9);