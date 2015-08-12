(function(global, $, undefined){
	'use strict';

	var $page_headline = $('#page h1');

	$page_headline.addClass('on');

	global.intervalID = setInterval(function() {
		$page_headline.toggleClass('on');
	}, 500);

	global.setTimeout(function() {
		clearInterval(global.intervalID);
	}, 3000);

	// global.setTimeout(function() {
	// 	$page_headline.removeClass('on');
	// }, 1000);

	// var toggle_limit_count = 3;

	// 3회 클릭한 경우, 더 이상 작동하지 않음.
	$page_headline.on('click', (function(){

		// 클로저 함수가 참조하는 상위 영역의 지역 변수
		var toggle_limit_count = 3;

		// 클로저 함수 반환
		return function() {
			console.log(toggle_limit_count);
			if ( $page_headline.hasClass('on') ) {
				$page_headline.removeClass('on');
			}
			if (toggle_limit_count-- > 0) {
				$page_headline.toggleClass('off');
			}
		}

	})());

})(window, window.jQuery);