/**
 * ---------------------------------------------------
 * 자바스크립트에서 객체를 만드는 방법(패턴)
 * ---------------------------------------------------
 */

/**
 * --------------------------------
 * 1. 생성자 함수를 사용하는 방법
 */

var model = new Object(); // Object 네이티브 객체

// 생성된 객체 인스턴스(실체화(사용 가능한) 된 객체)
// console.log('객체 인스턴스:', model);

// 생성된 객체 인스턴스는 자신을 생성한 부모(생성자 함수)에
// 접근할 수 있는 속성을 가집니다.
// ex) obj_instance.constructor
// console.log('객체 인스턴스의 생성자(함수): ', model.constructor);

// 자바스크립트 언어에서 모든 생성자 함수는 프로토타입을 가집니다.
// 프로토타입은 객체로 생성자 함수를 통해 만들어진 객체 인스턴스의 프로토타입이기도 합니다.
// 즉, 객체 인스턴스는 프로토타입의 능력을 그대로 링크해서 사용하게 됩니다.
// ex) model.constructor.prototype === Object.prototype;
// console.log('객체 인스턴스의 프로토타입: ', model.constructor.prototype);




/**
 * --------------------------------
 * 2. 네이티브 객체의 경우에 한해서 표현식(리터릴, 값)을 사용하는 방법
 */

/**
 * 원시 데이터: 숫자, 문자, 논리
 */
// var num = new Number(9);
var num = 9;

// var str = new String('I am Hungry.');
var str = 'I am Hungry.';

// var boo = new Boolean(true);
var boo = true;

/**
 * 복합 데이터: 함수, 배열, 객체
 */
// var fnc = new Function();
var fnc = function() {};

// var arr = new Array();
var arr = [];

// var obj = new Object();
var obj = {};



