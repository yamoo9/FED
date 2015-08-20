/*! jquery.radioClass.js © yamoo9.net, 2015 */
;(function(global, $, undefined){
	'use strict';

	if ( !$.fn.radioClass ) {

		$.fn.radioClass = function(user_argument) {

			// 사용자 전달인자 유형 체크를 위한 변수 설정
			// $.type() 유틸리티 메소드 활용
			var _type = $.type(user_argument);

			// 전달인자 유효성 검사
			if ( _type !== 'string' && _type !== 'function' ) {
				throw console.error('라디오클래스를 적용할 클래스 속성 문자열이거나, 함수를 전달해야 합니다.');
			}

			// _type 값이 문자일 때
			if(_type === 'string')
			{
				this.addClass(user_argument).siblings('.'+user_argument).removeClass(user_argument);
				return this;
			}
			// _type 값이 함수일 때
			else
			{
				return $.each(this, function(index, dom_el) {
					var result_className = user_argument.call(dom_el, index, dom_el.getAttribute('class'));
					this.addClass(result_className).siblings('.'+result_className).removeClass(result_className);
					return this;
				});
			}

		}; // 플러그인 끝

	}

})(window, window.jQuery);