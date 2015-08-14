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
	// $accordion_handles.on('click', toggleContent);
	$accordion_handles.on('click', radioContent);

	// 초기 실행
	$accordion_handles.eq(random).click();

	/**
	 * --------------------------------
	 * Event 핸들러
	 * --------------------------------
	 */

	function radioContent(e) {
		// return false; 구형 이벤트 모델
		// event.preventDefault(); 신형 이벤트 모델
		// return과 달리 함수를 종료시키지 않기 때문에
		// 코드의 어느 위치에 있어도 상관 없습니다.
		e.preventDefault();

		// this vs e.target
		// <div> vs <a>
		// console.log(this, e.target);

		var $this = $(this);
		// this.classList.add('on'); // IE 9+
		$this.addClass('on'); // <div>
		// $(e.target).parent().addClass('on'); // <a>

		// 형제들 siblings 중, 핸들 handle 요소만 필터링 Filtering
		var $siblings = $this.siblings('[class*="-handle"]');
		$siblings.removeClass('on');

	}

	// toggleContent()
	// 핸들을 클릭하면 바로 인접한 콘텐츠가 열리거나, 닫히는 일을 수행
	function toggleContent(e) {

		// 기본 동작을 차단했는가? No
		if( e.isDefaultPrevented() ) {
			console.log('기본 동작이 차단되었습니다.');
		} else {
			console.log('기본 동작이 차단되지 않았습니다.');
		}

		// 브라우저의 기본 동작 차단
		// event.preventDefault()
		e.preventDefault();

		// 기본 동작을 차단했는가? Yes
		if( e.isDefaultPrevented() ) {
			console.log('기본 동작이 차단되었습니다.');
		} else {
			console.log('기본 동작이 차단되지 않았습니다.');
		}

		var $this   = $(this),
			$nextEl = $this.next();

		$this.toggleClass('on');

		$nextEl.slideToggle('normal');

		// console.log('return 이전 작성한 코드');

		// return false; // 함수 종료

		// console.log('return 이후 작성한 코드');

	}



})(window, window.jQuery);