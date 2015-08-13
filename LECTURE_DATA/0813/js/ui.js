(function(global, $, undefined){
	'use strict';

	/**
	 * --------------------------------
	 * UI 초기 실행
	 * --------------------------------
	 */

	// UI 적용 대상 참조
	var $accordion          = $('.ui-accordion'),
		$accordion_handles  = $accordion.find('[class*="-handle"]'),
		$accordion_contents = $accordion.find('[class*="-content"]'),
		random              = Math.floor( Math.random() *  $accordion_contents.length );

	// 아코디언 위젯의 모든 콘텐츠를 숨김
	$accordion_contents
		.hide()
		// 아코디언 위젯 중 일부 콘텐츠는 보임(랜덤 설정)
		.eq( random || 0 ).show();

	/**
	 * --------------------------------
	 * Event 핸들링
	 * --------------------------------
	 */
	// console.log($accordion_handles);
	$accordion_handles.on('click', function() {
		// jQuery의 .on() 함수 내 전달되는 함수 안에서의 this는
		// DOM ElementNode 입니다. 고로... jQuery 인스턴스의
		// 능력은 사용할 수 없습니다.
		// console.log(!!this.addClass); // false
		// console.log(this.nextElementSibling);

		// this.nextElementSibling.style.display = 'block';

		var $nextEl = $(this).next();

		// $nextEl 보여지는 상태? 안 보여지는 상태?
		// if ( $nextEl.css('display') === 'none' ) {
		if ( $nextEl.is(':hidden') ) {
			$nextEl.show();
		} else {
			$nextEl.hide();
		}

		return false;
	});


	/**
	 * --------------------------------
	 * Event 핸들러
	 * --------------------------------
	 */


})(window, window.jQuery);