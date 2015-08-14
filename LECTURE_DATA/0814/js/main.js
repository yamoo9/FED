/*! main.js © yamoo9.net, 2015 */
(function(global, $, undefined){
	'use strict';

	// DOM 객체를 jQuery 인스턴스 객체화
	var $app       = $('#app'),
		$app_child = $('.app-child', $app),
		isHarmony  = !false;

	// console.log($app, $app_child);

	$app_child
		// toggleclass - 문자열 전달 예제
		.toggleclass('beta')
		// toggleclass - 상태(State) 전달 예제
		.toggleClass('harmony', isHarmony)
		.toggleClass('not-harmony', !isHarmony)
		// toggleclass - 함수 전달 예제
		.toggleClass(function(){
			var toggleclass = '';
			// ------------------------------------------------
			// Javascript 방식
			var parentID = this.parentNode.getAttribute('id');
			if(parentID === 'app') {
				toggleclass = 'my-parent-is-app';
			}
			// ------------------------------------------------
			// jQuery 방식
			if( $(this).parent().is('#app') ) {
				toggleclass = 'my-parent-is-app';
			}
			// ------------------------------------------------
			return toggleclass;
		});

})(window, window.jQuery);