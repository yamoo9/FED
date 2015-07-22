/*! index.js © yamoo9.net, 2015 */

/**
 * --------------------------------
 * 돔스크립트 디자인 패턴
 * 	- 선택(탐색)
 * 	- 조작
 * 	- 이벤트 핸들링
 *
 * 자바스크립트 코어 문법
 * 	- 변수 (메모리에 특정 공간을 생성하고 데이터를 할당)
 * 	- 연산자 (대입, 비교)
 * 	- 조건문 (if, if ~ else, if ~ else if ~ else)
 * --------------------------------
 */

/**
 * 돔스크립트에서 문서 객체를 선택하는 방법
 *
 * Legacy DOM L0
 * - document.links
 * - document.anchors
 * - document.body
 * - document.body.className
 * - document.body.firstChild.nodeValue
 * - document.body.id
 * - doucment.body.title
 *
 * DOM L1
 * - .getElementById()
 * - .getElementsByTagName()
 * - .getElementsByClassName() // IE 9+
 * - .querySelector()          // IE 8+
 * - .querySelectorAll()       // IE 8+
 * - .getAttribute()
 * - .setAttribute()
 *
 * Native -> Helpers Function
 * --------------------------------
 */

/**
 * --------------------------------
 * 자바스크립트 코어
 * 변수와 상수
 * 변수는 런타임 중에 값을 변경할 수 있다.
 * 변수는 값을 하나만 담을 수 있어요.
 * 변수 이름을 지을 때는 대소문자 섞어쓸 수 있어요.
 * 변수 이름을 지을 때는 첫글자에 숫자가 오면 안됩니다.
 * 변수 이름을 지을 때는 공백을 사용하면 안된다.
 * 음절 사이를 구분하여 가독성을 높이고 싶다면
 * _을 사용하거나, 카멜케이스(낙타 등) 표기법 사용.
 * _, $ 을 제외한 특수문자 사용하면 안되요.
 *
 * 상수 이름을 지을 때는 모두 대문자로 짓습니다.
 * --------------------------------
 */

var app = _('#app');
var demo = _('.demo');

function _(css_ex) {
	var target = document.querySelector(css_ex);
	return target;
}