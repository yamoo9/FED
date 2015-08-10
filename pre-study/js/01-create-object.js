/*! main.js © yamoo9.net, 2015 */

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





/**
 * ---------------------------------------------------
 * 사용자 정의 객체 (다른 언어에서는 클래스(Class))
 * ---------------------------------------------------
 */


/**
 * 잠자는 아이 (객체)
 * --------------------------------
 */

// sleepingBaby 사용자 정의 객체를 정의
var sleepingBaby = new Object();
sleepingBaby.type = 'Baby';
sleepingBaby.self = sleepingBaby;

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
	this.current_state = 'Oops! '+ this.type +' is crying';
};

// 새로운 멤버를 객체에 추가(확장)
sleepingBaby.currentStatus = function() {
	return 'My '+ this.type +' is ' + this.current_state + '. ' + (this.isSleep() ? 'I\'m Happy. :-)' : 'I\'m Sad. :-(');
}

// sleepingBaby.updateFromCopyObj
sleepingBaby.update = function(copy_obj) {
	this.self = copyObjectProperties(this, copy_obj, false);
}



/**
 * --------------------------------
 * 능력 복제
 * 복사/붙여넣기 ---> ?
 * 복사/붙여넣기 모듈화(재사용) ---> ?!!
 */

/**
 * 객체의 능력(속성)을 복제하는 헬퍼 함수
 * copyObjectProperties(객체1, 객체2, 모든 속성 복사 설정);
 * 객체2의 능력을 객체1에 복제
 */
function copyObjectProperties(assign_obj, target_obj, is_copy_all) {
	// assign_obj <---- (복사) ---- target_obj
	var prop;

	// 모든 능력을 복사할 것인가?
	// 아니면 없는 능력만 복사할 것인가?
	// 설정 옵션 초기 실행시, 처리
	is_copy_all = (typeof is_copy_all === 'undefined' || is_copy_all === true) ? true : false;


	if (is_copy_all) {
		// 모든 속성을 복사
		for (prop in target_obj) {
			assign_obj[prop] = target_obj[prop];
		}
	} else {
		// 없는 속성만 복사
		// target_obj의 모든 능력을 assign_obj에 복사
		for (prop in target_obj) {
			// assign_obj가 이미 해당 능력을 가지고 있다면?
			// target_obj의 능력을 복사하고 싶지 않다.
			if ( !assign_obj[prop] ) {
				// console.log(prop, target_obj[prop]);
				assign_obj[prop] = target_obj[prop];
			}
		}
	}

	// 모든 능력 복사가 끝나면 적용 객체를 반환
	return assign_obj;
}



/**
 * 잠자는 강아지 (객체)
 * --------------------------------
 */

// // sleepingDog 사용자 정의 객체를 정의
// var sleepingDog = new Object();

// // sleepingDog 사용자 정의 객체의 멤버 구현
// sleepingDog.current_state = 'sleep'; // 'awake'
// // sleepingDog.current_sleep_state = true; // false
// sleepingDog.isSleep = function() {
// 	return this.current_state === 'sleep';
// };
// sleepingDog.awake = function() {
// 	this.current_state = 'awake';
// };
// sleepingDog.sleep = function() {
// 	this.current_state = 'sleep';
// };
// sleepingDog.cry = function() {
// 	this.current_state = 'Oops! Dog is crying.';
// };

var sleepingDog = {};
sleepingDog.type = 'Dog';
sleepingDog.self = sleepingDog;

console.log(sleepingDog);

// 다른 객체의 멤버를 복사해서 새로운 객체에 할당
// sleepingDog.isSleep = sleepingBaby.isSleep;

// copyObjectProperties 헬퍼 함수를 사용하여
// 다른 객체의 멤버를 복사해서 새로운 객체에 할당
sleepingDog = copyObjectProperties(sleepingDog, sleepingBaby, false);
console.log(sleepingDog);


/**
 * 잠자는 고양이 (객체)
 * --------------------------------
 */

// // sleepingCat 사용자 정의 객체를 정의
// var sleepingCat = new Object();

// // sleepingCat 사용자 정의 객체의 멤버 구현
// sleepingCat.current_state = 'sleep'; // 'awake'
// // sleepingCat.current_sleep_state = true; // false
// sleepingCat.isSleep = function() {
// 	return this.current_state === 'sleep';
// };
// sleepingCat.awake = function() {
// 	this.current_state = 'awake';
// };
// sleepingCat.sleep = function() {
// 	this.current_state = 'sleep';
// };
// sleepingCat.cry = function() {
// 	this.current_state = 'Oops! Cat is crying.';
// };

var sleepingCat = {};
sleepingCat.type = 'Cat';
sleepingCat.self = sleepingCat;

sleepingCat = copyObjectProperties(sleepingCat, sleepingDog, false);

console.log(sleepingCat);