/**
 * ---------------------------------------------------
 * 사용자 정의 객체 (다른 언어에서는 클래스(Class))
 * 생성자 함수 (일급 함수)
 * ex) new 생성자 함수 -> 객체 인스턴스 생성
 * ---------------------------------------------------
 */

// 생성자 함수 (Constructor Function)
// BioCreature 정의
function BioCreature() {
	// JS 함수 내부의 this는 함수의 실행 영역(Excutable Context)을 가리킴.(참조)
	this.self = this;
	this.type = null;
	this.current_state = 'sleep';
	// return this;
}

// 생성자를 통해 생성되는 모든 인스턴스 원형의 멤버 정의
// 공통적으로 모든 인스턴스 객체가 가지는 멤버가 됩니다.
BioCreature.prototype.init = function(initializationFn) {
	// 함수 실행시, 사용자가 전달한 인자들의 집합
	// arguments
	initializationFn.call(this); // this === window
	return this;
};
BioCreature.prototype.getType = function() {
	return this.type;
};
BioCreature.prototype.setType = function(type) {
	this.type = type;
};
BioCreature.prototype.getState = function() {
	return this.current_state;
};
BioCreature.prototype.setState = function(state) {
	this.current_state = state;
};
BioCreature.prototype.isSleep = function() {
	return this.getState() === 'sleep';
};
BioCreature.prototype.isCry = function() {
	return this.getState() === 'cry';
};
BioCreature.prototype.isAwake = function() {
	return this.getState() === 'awake';
};
BioCreature.prototype.awake = function() {
	this.setState('awake');
};
BioCreature.prototype.sleep = function() {
	this.setState('sleep');
};
BioCreature.prototype.cry = function() {
	this.setState('Oops! '+ this.type +' is crying');
};
BioCreature.prototype.displayStatus = function() {
	return 'My '+ this.type +' is ' + this.getState() + '. ' + (this.isSleep() ? 'I\'m Happy. :-)' : 'I\'m Sad. :-(');
}

// 생성자 함수의 프로토타입 객체 (생성자로부터 생성된 모든 인스턴스 객체의 모체(원형))
// BioCreature.prototype; // {}
// console.log(BioCreature.prototype);

// this === window 참조
// var resultFn = BioCreature(); // 실행 ━ 일반 함수와 같음.

// this === 생성된 객체 인스턴스 참조
// 객체 인스턴스 생성. (생성자 함수의 역할)
var sleepingDog = new BioCreature().init(function() {
	// this // 생성된 객체 인스턴스를 참조
	this.type = 'Dog';
	this.current_state = 'sleep';
});

var sleepingBaby = new BioCreature().init(function() {
	this.type = 'Baby';
	this.current_state = 'cry';
});

var sleepingCat  = new BioCreature().init(function() {
	this.type = 'Cat';
	this.current_state = 'awake';
});

// 생성된 객체 인스턴스
// console.log(sleepingBaby);

// 생성된 객체 인스턴스의 constructor 속성을 통해 생성자 함수가 누구인지 확인할 수 있다.
// console.log(sleepingBaby.constructor === BioCreature);