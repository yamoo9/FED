/**
 * ---------------------------------------------------
 * 사용자 정의 객체 (다른 언어에서는 클래스(Class))
 * 생성자 함수 (일급 함수)
 * ex) new 생성자 함수 -> 객체 인스턴스 생성
 *
 * Private Members in JavaScript (2001)
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

	// -----------------------------------------------------
	// 감춰진 멤버(Private Member)
	var _age          = 1,
		_birth__place = 'Earth',
		_leg__count   = 4;

	// -----------------------------------------------------
	// 공개된 멤버(Public Member)
	this.self = this;
	this.type = null;
	this.current_state = 'sleep';
	this.init(init_settings);

	// -----------------------------------------------------
	// 감춰진 멤버에 접근/조작할 수 있는 특별한 멤버(Privileged Member)
	this.getAge = function() {
		return _age;
	};

	this.setAge = function(value) {
		_age = value;
	};

	// -----------------------------------------------------
	// ECMAScript v5.1 (Standard) - Object.defineProperty()
	// 공개된 멤버이나, 외부에서 수정할 수 없도록 하고 싶을 때
	// 값을 가져오거나, 설정 가능하도록 구성하고자 할 때

	Object.defineProperty(this, 'birth_place', {
		'value': _birth__place,
		'configurable' : true,
		// 'enumerable'   : true,
		// 'writable'     : true
	});

	// 객체의 속성이 열거(Enumerable) 가능하니 체크하려면...
	// 객체.propertyIsEnumerable(값); // true or false

	// 'value'와 'get'을 함께 사용할 수는 없다.
	Object.defineProperty(this, 'leg_count', {
		'get': function() {
			return _leg__count;
		},
		'set': function(value) {
			_leg__count = value;
		}
	});

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