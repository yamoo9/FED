/*! index.js © yamoo9.net, 2015 */

// 지금 이 코드가 해석될 때는 HTML 엔진이 놀고 있는 순간입니다.
// 고로 <body> 내부의 모든 것은 아직 미완성 상태입니다.
// 하여 접근이 불가능합니다.

// <html> 요소를 DOM 방식으로 접근하는 방법
var html = document.documentElement;
var head = document.head;
var body = document.body;

console.log(html, head, body);

// <html> 요소의 클래스 속성 값으로 'hi~there'를 추가하는 방법
html.classList.add('hi~there');

// 문서 객체 #app에 접근하고자 한다.
var app = document.getElementById('app');

console.log(app);