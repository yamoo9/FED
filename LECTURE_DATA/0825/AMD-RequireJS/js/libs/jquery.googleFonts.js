(function(global, $, undefined){
	'use strict';

	// jQuery 팩토리함수의 유틸리티 메소드 확장
	$.googleFonts = function(families) {

		// 유효성 검사: jQuery 의존성 체크
		if (!window.jQuery) { throw console.error('jQuery를 호출하셔야 합니다.');}

		// Google webfont.js에서 웹폰트를 호출할 수 있도록 WebFontConfig 객체 생성
		if(!window.WebFontConfig) {
			window.WebFontConfig = {
				'google': {
					// 사용자가 전달한 인자(argument) 값이 배열인지 체크하여
					// 배열일 경우, 사용자가 전달한 인자 그대로 설정
					// 배열이 아닌 경우, 배열 원소로 설정하여 배열 값을 전달.
					'families': $.isArray(families) ? families : [families]
				}
			};
		} else {
			if( $.isArray(families) ){
				window.WebFontConfig.google.families.push(families);
			} else {
				window.WebFontConfig.google.families = window.WebFontConfig.google.families.concat(families);
			}
		}

		// 프로토콜 체크하여 https 또는 http로 설정
		var protocol      = document.location.protocol === 'https' ? 'https' : 'http',
			// <script> 요소 동적으로 생성
			$wf           = $('<script id="Google-Webfont">'),
			// 문서에서 script 요소들을 찾아와 그 중 첫번째 요소를 $first_script 변수에 참조.
			$first_script = $('script').eq(0);

		// 동적으로 생성한 <script> 요소를 참조하는 $wf 변수에 .attr() 메소드로
		// 속성 설정
		$wf
			.attr({
				'src'   : protocol + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js',
				'async' : true
			})
			// $first_script 요소 앞에 $wf 요소 삽입
			.insertBefore( $first_script );

	};

})(window, window.jQuery);