/**
 * -------------------------------------
 * rootElement의 no- 접두사 클래스 속성을 변경
 * -------------------------------------
 */

// 전역(Global)

var html = $('html'),
	body = $('body');

// 오래된 DOM 방식 (HTML만 가능. 가급적 사용하지 않도록..)
// html.className

// 권장되는 DOM 방식 (HTML, XML 모두 사용 가능)
// <html> 요소의 class 속성 값을 가져와 보겠습니다.
var html_class = html.getAttribute('class');

// console.log(html_class);

// html.className = 'js';

// <html> 요소의 class 속성 값을 설정해보겠습니다.
html.setAttribute('class', 'js');

// 사용자의 웹 브라우저에서 새로운 CSS3 속성을 지원하는지 검사하여
// 그 결과를 <html> 요소의 class 속성 값으로 추가한다.


// if ( 'transition' in body.style ) {
// 	var html_old_class = html.getAttribute('class');
// 	// 조건이 참이면 실행되는 결과
// 	html.setAttribute('class', html_old_class + ' ' + 'transition');
// } else {
// 	// 조건이 거짓이면 실행되는 결과
// 	html.setAttribute('class', html_old_class + ' ' + 'no-transition');
// }

// if ( 'transform' in body.style ) {
// 	var html_old_class = html.getAttribute('class');
// 	// 조건이 참이면 실행되는 결과
// 	html.setAttribute('class', html_old_class + ' ' + 'transform');
// } else {
// 	// 조건이 거짓이면 실행되는 결과
// 	html.setAttribute('class', html_old_class + ' ' + 'no-transform');
// }

// if ( 'animation' in body.style ) {
// 	var html_old_class = html.getAttribute('class');
// 	// 조건이 참이면 실행되는 결과
// 	html.setAttribute('class', html_old_class + ' ' + 'animation');
// } else {
// 	// 조건이 거짓이면 실행되는 결과
// 	html.setAttribute('class', html_old_class + ' ' + 'no-animation');
// }

// if ( 'box-sizing' in body.style ) {
// 	var html_old_class = html.getAttribute('class');
// 	// 조건이 참이면 실행되는 결과
// 	html.setAttribute('class', html_old_class + ' ' + 'box-sizing');
// } else {
// 	// 조건이 거짓이면 실행되는 결과
// 	html.setAttribute('class', html_old_class + ' ' + 'no-box-sizing');
// }


/**
 * --------------------------------
 * 모듈화 -> 함수 갈무리
 * --------------------------------
 */
function checkCSS3Feature (feature) {
	if ( feature in body.style ) {
		var html_old_class = html.getAttribute('class');
		// 조건이 참이면 실행되는 결과
		html.setAttribute('class', html_old_class + ' ' + feature);
	} else {
		var html_old_class = html.getAttribute('class');
		// 조건이 거짓이면 실행되는 결과
		html.setAttribute('class', html_old_class + ' ' + 'no-'+feature);
	}
}