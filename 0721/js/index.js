// 문서 내에서 루트 요소를 찾고자 한다.
var rootElement = document.documentElement;
// var head = rootElement.firstChild;
var dom0head = document.head; // HTML DOM
var dom1head = document.getElementsByTagName('head')[0];

// console.log('dom0head = ', dom0head);
// console.log('dom1head = ', dom1head);

var body = rootElement.lastChild;
// console.log(rootElement, head, body);

var app = document.getElementById('app');
// console.log(app);

/**
 * --------------------------------
 * 노드의 유형(Node Type)
 * ElementNode   - 1
 * AttributeNode - 2
 * TextNode      - 3
 * --------------------------------
 */

var app_firstChild = app.firstChild // Node Type 노드의 유형?
// console.log(app_firstChild.nodeType); // 텍스트 노드의 유형 값은???

/**
 * -----------------------------------------------------
 * 개발자가 CSS 디자이너에게 class 속성을 사용하지 말길 요구한 이유는?
 * 못 가져오는 것이 아니라, 가져오기 귀찮거나 방법을 모르는 것일 뿐.
 * -----------------------------------------------------
 */

// #app
// #app article
var articles = app.getElementsByTagName('article');
// console.log(articles);

var posts = app.getElementsByClassName('post'); // IE 9+
console.log(posts);

