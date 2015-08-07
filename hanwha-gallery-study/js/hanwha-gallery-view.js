(function(global, hw){
	'use strict';

	var model = hw.model;

	/**
	 * ----------------------------------------------------------------------
	 * Functions
	 * ----------------------------------------------------------------------
	 */

	/**
	 * 정해진 텍스트의 길이 이상되는 코드는 잘라버리고, 마지막에 ...을 붙여주는 함수
	 * @param  {String} text        텍스트
	 * @param  {Number} slice_count 자르고자 하는 단어 개수
	 * @return {String} 잘라버린 텍스트...
	 */
	function textElipsis(text, slice_count) {
		slice_count = slice_count || 5;
		var convert_text = text.split(' ');
		if ( convert_text.length <= slice_count ) {
			convert_text = convert_text.slice(0, slice_count).join(' ');
		} else {
			convert_text = convert_text.slice(0, slice_count).join(' ') + '...';
		}
		return  convert_text;
	}

	/**
	 * 템플릿 코드를 완성하여 반환하는 함수
	 * @param  {Array}  모델(model) 데이터
	 * @return {String} 모델을 토대로 완성된 HTML 템플릿 코드 문자열
	 */
	function makeTemplateCode(model) {

		// 템플릿 코드를 접합할 초기 변수 template_code 선언
		var template_code = '';

		// 모델 데이터 반복 순환 처리하여 템플릿 코드 작성
		model.forEach(function(item, index) {
			template_code += '<li class="hw-gallery-item">';
			template_code += 	'<a href="'+ item.href +'">';
			template_code += 		'<img src="'+ item.image +'" alt="">';
			template_code += 		'<h3 class="headline">'+ textElipsis(item.headline, 10) +'</h3>';
			template_code += 		'<p class="summary">'+ textElipsis(item.summary, 14) +'</p>';
			template_code += 	'</a>';
			template_code += '</li>';
		});

		// 작성된 템플릿 코드 template_code의 앞/뒤에 <ul>, </ul> 문자열을 추가하여 반환
		return '<ul class="hw-gallery-container">'+ template_code +'</ul>';
	}

	/**
	 * 모델 데이터의 개수를 화면에 표시할 카운트로 나눈 결과를 토대로 페이지네이션 컴포넌트를 작성하는 함수
	 * @param  {Array} model              모델 데이터
	 * @param  {Number} display_item_count 화면에 표시할 아이템의 개수
	 * @return {String}                    동적으로 작성된 HTML 코드
	 */
	function makePagenation(model, display_item_count) {
		// display_item_count의 초기 설정
		display_item_count = display_item_count || 3;

		// 필요한 정보를 토대로 make_count 값을 구성
		var total      = model.length,
			make_count = Math.ceil(total/display_item_count); // Math.ceil() 올림

		// 만들어야 하는 페이지네이션 아이템 반복 처리
		for (var i = 0, page_nation_code=''; i < make_count; i++) {
			page_nation_code += '<a href role="button" aria-label="'+(i+1)+'번째 슬라이드"></a>';
		};

		return '<div class="hw-gallery-pagenation">' + page_nation_code + '</div>';
	}





	/**
	 * ----------------------------------------------------------------------
	 * View
	 * ----------------------------------------------------------------------
	 */

	/**
	 * --------------------------------
	 * gallery
	 */
	// 갤러리 요소 참조
	var gallery = document.querySelector('#hanwha-gallery');

	// [초기화] 속성 및 스타일 설정
	gallery.setAttribute('class', 'wrapper hw-gallery');
	gallery.style.overflow = 'hidden';

	// [초기화] 갤러리 템플릿, 페이지네이션 동적 구현을 위한 함수 실행(모델 전달)
	gallery.innerHTML = makeTemplateCode(model);
	gallery.innerHTML = makePagenation(model) + gallery.innerHTML;

	/**
	 * --------------------------------
	 * gallery-container
	 */
	// 갤러리 컨테이너 요소 및 하위 리스트 요소 & 기준이 되는 리스트 가로 폭 참조
	var container          = gallery.querySelector('.hw-gallery-container'),
		container_li       = container.querySelector('li'),
		container_li_width = parseInt(global.getComputedStyle(container_li).width),
		container_width    = container_li_width * model.length + 'px';

	// 갤러리 컨테이너 요소에 스타일 설정
	container.style.width = container_width;

	/**
	 * --------------------------------
	 * gallery-pagenation
	 */
	// [초기화] 갤러리 페이지네이션 요소 및 첫번째 요소 참조
	var pagenation       = gallery.querySelector('.hw-gallery-pagenation'),
		pagenation_first = pagenation.children[0];

	// 페이지네이션 첫번째 요소에 동적으로 활성화 클래스 설정
	pagenation_first.classList.add('on');


	// window.hanwha.view 객체 설정
	hw.view = {
		'gallery'    : gallery,
		'container'  : container,
		'pagenation' : pagenation,
	}

})(window, window.hanwha);