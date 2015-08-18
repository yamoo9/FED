/*! jquery.radioClass.js © yamoo9.net, 2015 */
;(function(global, $, undefined){
	'use strict';

	// jQuery 인스턴스 메소드인 radioClass가 정의되어 있는지 확인 후,
	// 없다면 정의
	if ( !$.fn.radioClass ) {
		$.fn.radioClass = function(class_name) {

			if ( $.type(class_name) !== 'string' ) {
				throw console.error('라디오클래스를 적용할 클래스 속성 문자열을 전달해야 합니다.')
			}

			// 플러그인 코드 안에서 this는 jQuery 인스턴스 객체이다.
			this.addClass(class_name).siblings('.'+class_name).removeClass(class_name);

			// jQuery 체이닝을 구현하기 위한 this 반환
			return this;
		}
	}

})(window, window.jQuery);