/*
 * ================================
 * Javascript MVC 디자인 패턴
 * --------------------------------
 * Model      - 구조(Data)
 * View       - 표현(Template)
 * Controller - 동작(Behavior)
 * --------------------------------
 * 각 계층은 독립적으로 서로 의존하지 않고,
 * 분리되도록 설계(Design)되어야 한다.
 * ================================
 */

/**
 * ================================
 * [M]odel
 * --------------------------------
 * 구조화된 View 템플릿에 적용되는 Data
 * HTML, XML, JSON ...
 * AJAX - 비동기 통신
 */


/**
 * ================================
 * [V]iew
 * --------------------------------
 * 뷰 타겟(View Target) 설정
 * CSS 선택자를 활용하여 문서 객체 참조
 */
var gnb                   = $('#gnb'), // Selecting
	gnb_expand_handle     = find(gnb, '.expand-handle'), // Traversing
	gnb_expand_handle_len = gnb_expand_handle.length;

// console.log(gnb_expand_handle);

/**
 * ================================
 * [C]ontroller
 * --------------------------------
 * 뷰 타겟에 이벤트 연결
 * <li> ⇒ MOUSE 이벤트 연결
 * <a>  ⇒ KEYBOARD 이벤트 연결
 *
 * 이벤트 핸들러(함수) 정의
 * expandMenu()
 * collapseMenu()
 */