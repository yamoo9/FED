// AMD Pattern
// define() 함수
// require() 함수

define([
	'jquery.utils'
],
function() {
	'use strict';

	// jquery.darkNight.js 플러그인 코드 개발
	if (!$.fn.darkNight) {

		// Letter 초기 옵션
		var letters = {
			'first' : 'DARK',
			'last'  : 'NIGHT',
		};

		$.fn.darkNight = function(options) {

			// this -> jQuery 인스턴스 객체
			// console.log(this.jquery);

			// darkNight 스타일 추가
			$('<link>', {
				'id'   : 'dark-night',
				'rel'  : 'stylesheet',
				'href' : 'js/plugins/jquery.darkNight.css'
			})
			.insertAfter('link:eq(0)');

			// 사용자 정의 옵션 오버라이딩
			letters = $.extend({}, letters, options);

			console.log(letters);

			// darkNight 템플릿
			var dark_night_tempate = [
				'<div id="box">',
					'<p id="flashlight">',
						'<span id="flash">'+ letters.first +'</span>',
						'<span id="light">'+ letters.last +'</span>',
					'</p>',
				'</div>'].join('');

			// darkNight 마크업 추가
			$(dark_night_tempate).prependTo('body');

			// jQuery 체이닝
			return this;

		};
	}

});