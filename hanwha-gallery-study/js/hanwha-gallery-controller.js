(function(global, hw){
	'use strict';

	// View 이벤트 대상 참조 및 변수 설정
	var view            = hw.view,
		container       = view.container,
		pagenation      = view.pagenation,
		pagenation_btns = pagenation.querySelectorAll('a'),
		container_width = view.container_base_width * 3;

	/**
	 * --------------------------------
	 * 이벤트 핸들링
	 * 이벤트 대상 반복 구문 처리
	 * 이벤트 위임
	 * --------------------------------
	 */
	// 유사배열인 pagenation_btns 노드리스트가
	// 배열 인스턴스의 forEach 메소드(함수)를 빌려서
	// data-index 속성을 동적으로 설정합니다.
	[].forEach.call(pagenation_btns, function(item, index) {
		item.setAttribute('data-index', index);
		item.onclick = slideGallery;
	});

	/**
	 * --------------------------------
	 * 이벤트 핸들러
	 * --------------------------------
	 */
	function slideGallery() {
		var index = -1 * this.getAttribute('data-index'),
			distance_x = container_width * index + 'px';

		[].forEach.call(this.parentNode.children, function(item) {
			if ( item.classList.contains('on') ) {
				item.classList.remove('on');
			}
		});

		this.classList.add('on');
		container.style.transform = 'translateX(' + distance_x + ')';

		// 기본 동작 차단
		return false;
	}


	// 페이지네이션 첫번째 요소에 동적으로 활성화 클래스 설정
	// 랜덤하게 슬라이드 갤러리 실행
	var random_count = Math.floor(Math.random() * pagenation_btns.length);
	pagenation_btns[random_count].onclick();

})(window, window.hanwha);