/*! dom-helpers.js © yamoo9.net, 2015 */

// 전역 영역(Global Scope)
// 변수를 명시적으로 선언하는 var 키워드
// 전역 변수는 어디에서나 접근/수정이 가능하다.
var dom = {}; // 오브젝트 리터럴(객체 값) 할당(대입)

/**
 * --------------------------------
 * 생성(Make, Create)
 * --------------------------------
 */
// 객체에 속성(Property, Attribute)을 설정(정의)
// 속성 중에 함수 유형인 것을 특별하게 구분하여 메소드(Method)라 부른다.
dom.createEl = function(el_name) {
	// 함수의 연산 결과 값을 반환 :: return
	return document.createElement(el_name);
};

dom.createText = function(text_content) {
	return document.createTextNode(text_content);
};

/**
 * --------------------------------
 * 조작(Manipulation)
 * - 삽입(Insertion)
 * --------------------------------
 */
dom.append = function(parent, child) {
	parent.appendChild(child);
}
