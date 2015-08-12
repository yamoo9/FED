/**
 * ---------------------------------------------------
 * 사용자 정의 객체 (다른 언어에서는 클래스(Class))
 * 생성자 함수 (일급 함수)
 * ex) new 생성자 함수 -> 객체 인스턴스 생성
 *
 * Private Members in JavaScript
 * http://javascript.crockford.com/private.html
 *
 * JavaScript의 privileged 메서드가 끔찍한 이유
 * https://justhackem.wordpress.com/2014/06/27/why-privileged-methods-terrible/
 * ---------------------------------------------------
 */

// 생성자 함수 (Constructor Function)
function BioCreature(init_settings) {
	// 전역과 구분되는 별도의 독립 공간
	// 생성자 함수 내부에 속성을 설정하되,
	// 지역 변수, 지역 함수 형태로 정의하면
	// 그것이 곧 감춰진 멤버(Private Member).
	var _age = 1;

	// 공개된 멤버(Public Member)
	this.self = this;
	this.type = null;
	this.current_state = 'sleep';
	this.init(init_settings);

	this.getAge = function() {
		return _age;
	};

	this.setAge = function(value) {
		_age = value;
	};

	// this._creature = _creature;
	// return _creature;

	// 공개된 멤버이나, 외부에서 수정할 수 없도록 하고 싶을 때
	// Object.defineProperty(this, 'may', {
	// 	'get': function() {
	// 		return 9;
	// 	}
	// });
}

// 생성자 함수의 프로토타입 (Prototype)
BioCreature.prototype.init = function(initializationFn) {
	initializationFn.call(this);
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