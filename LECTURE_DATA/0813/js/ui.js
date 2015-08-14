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
	$accordion_contents.slideUp('fast');


	/**
	 * --------------------------------
	 * Event 바인딩
	 * --------------------------------
	 */
	// console.log($accordion_handles);
	$accordion_handles.on('click', toggleContent);

	// 초기 실행
	$accordion_handles.eq(random).click();

	/**
	 * --------------------------------
	 * Event 핸들러
	 * --------------------------------
	 */

	function toggleContent(e) {
			// jQuery의 .on() 함수 내 전달되는 함수 안에서의 this는
			// DOM ElementNode 입니다. 고로... jQuery 인스턴스의
			// 능력은 사용할 수 없습니다.
			// console.log(!!this.addClass); // false
			// console.log(this.nextElementSibling);

			// this.nextElementSibling.style.display = 'block';

			var $this   = $(this),
				$nextEl = $this.next();

			$this.toggleClass('on');

			// if ( $this.hasClass('on') ) {
			// 	$this.removeClass('on');
			// } else {
			// 	$this.addClass('on');
			// }

			$nextEl.slideToggle('normal');

			// $nextEl 보여지는 상태? 안 보여지는 상태?
			// if ( $nextEl.css('display') === 'none' ) {
			// if ( $nextEl.is(':hidden') ) {
			// 	$nextEl.show();
			// } else {
			// 	$nextEl.hide();
			// }

			return false;
		}

})(window, window.jQuery);