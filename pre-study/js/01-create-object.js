/*! main.js © yamoo9.net, 2015 */

/**
 * --------------------------------
 * 자바스크립트에서 객체를 만드는 방법(패턴)
 * --------------------------------
 */

// 1. 생성자 함수를 사용하는 방법
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




// 2. 네이티브 객체의 경우에 한해서 표현식(리터릴, 값)을 사용하는 방법

/**
 * --------------------------------
 * 원시 데이터: 숫자, 문자, 논리
 */
// var num = new Number(9);
var num = 9;

// var str = new String('I am Hungry.');
var str = 'I am Hungry.';

// var boo = new Boolean(true);
var boo = true;

/**
 * --------------------------------
 * 복합 데이터: 함수, 배열, 객체
 */
// var fnc = new Function();
var fnc = function() {};

// var arr = new Array();
var arr = [];

// var obj = new Object();
var obj = {};




// 사용자 정의 객체 (다른 언어에서는 클래스(Class))

/**
 * 잠자는 아이
 * --------------------------------
 */

// sleepingBaby 사용자 정의 객체를 정의
var sleepingBaby = new Object();

// sleepingBaby 사용자 정의 객체의 멤버 구현
sleepingBaby.current_state = 'sleep'; // 'awake'
// sleepingBaby.current_sleep_state = true; // false
sleepingBaby.isSleep = function() {
	return this.current_state === 'sleep';
};
sleepingBaby.awake = function() {
	this.current_state = 'awake';
};
sleepingBaby.sleep = function() {
	this.current_state = 'sleep';
};
sleepingBaby.cry = function() {
	this.current_state = 'Oops! Baby is crying';
};
sleepingBaby.currentStatus = function() {
	return 'My Baby is ' + this.current_state + '. ' + (this.isSleep() ? 'I\'m Happy. :-)' : 'I\'m Sad. :-(');
}


// console.log(sleepingBaby);


/**
 * 잠자는 강아지
 * --------------------------------
 */

// sleepingDog 사용자 정의 객체를 정의
var sleepingDog = new Object();

// sleepingDog 사용자 정의 객체의 멤버 구현
sleepingDog.current_state = 'sleep'; // 'awake'
// sleepingDog.current_sleep_state = true; // false
sleepingDog.isSleep = function() {
	return this.current_state === 'sleep';
};
sleepingDog.awake = function() {
	this.current_state = 'awake';
};
sleepingDog.sleep = function() {
	this.current_state = 'sleep';
};
sleepingDog.cry = function() {
	this.current_state = 'Oops! Dog is crying.';
};

/**
 * 잠자는 고양이
 * --------------------------------
 */

// sleepingCat 사용자 정의 객체를 정의
var sleepingCat = new Object();

// sleepingCat 사용자 정의 객체의 멤버 구현
sleepingCat.current_state = 'sleep'; // 'awake'
// sleepingCat.current_sleep_state = true; // false
sleepingCat.isSleep = function() {
	return this.current_state === 'sleep';
};
sleepingCat.awake = function() {
	this.current_state = 'awake';
};
sleepingCat.sleep = function() {
	this.current_state = 'sleep';
};
sleepingCat.cry = function() {
	this.current_state = 'Oops! Cat is crying.';
};