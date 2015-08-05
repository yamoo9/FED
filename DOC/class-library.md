1. ##### 모듈 & 클래스

	- 정적 클래스 → Javascript Object Literal(`{}`)
	- 전통적인 클래스 → 상속(Inheritance), 인스턴스(Instance) 활용
	- Javascript 클래스 → 프로토타입(Prototype) 기반 언어 (클래스 기반 언어 모방 가능)
		- 생성자 함수(Constructor)를 활용하여 오브젝트 인스턴스 화
		- new 키워드 〓 return문의 동작과 함수 컨텍스트(Context) 변경
			```js
			// [[생성자 함수]]
			// 생성자 함수는 첫글자를 대문자로 표기하여 일반 함수와 구분하는 것이 관례
			function Tab() {}

			// [[프로토타입]]
			Tab.prototype.init = function(){};

			// Tab [[인스턴스 객체]] 생성
			var tab_instance = new Tab();

			// 생성된 인스턴스의 생성자 확인
			tab_instance.constructor === Tab; // true
			tab_instance instanceof Tab;      // true
			```
	- Javascript 클래스 에뮬레이션 라이브러리

		```js
		// 클래스 에뮬레이션 라이브러리 함수
		var Class = function() {
			// 생성자 함수
			function __class() {
				this.init.apply(this, arguments);
			};
			// 프로토타입
			__class.prototype.init = function() {};
			// 반환
			return __class;
		};

		// Tab 클래스 생성
		var Tab = new Class;
		Tab.prototype.init = function() {
			// Tab 인스턴스 생성 시 수행할 일.
		};

		// Tab 인스턴스 생성
		var tab = new Tab;
		```

2. ##### 클래스에 함수 추가

	객체에 속성을 추가하는 방법으로 클래스에 함수 추가
	```js
	// 정적 멤버(함수) 추가
	Tab.find = function(el) {};
	var tab_item = Tab.find('a.tab-handle');

	// 인스턴스 멤버(메소드) 추가
	Tab.prototype.next = function() {};

	var tab = new Tab;
	tab.next();
	```

3. ##### 클래스 라이브러리에 메소드(Method) 추가

	위 과정에서 다룬 방법으로는 문법이 복잡하고 실용성이 떨어지며, 반복적.

	```js
	var Class = function() {

		function __class() {
			this.init.apply(this, arguments);
		};

		// 프로토타입 별칭(Alias) 설정
		__class.fn = __class.prototype;

		// 클래스 멤버 확장 함수
		__class.extend = function(obj) {
			var extended = obj.extended;
			for(var key in obj) {
				this[key] = obj[key];
			}
			extended && extended.call(__class);
		};

		// 인스턴스 메소드 확장 함수
		__class.include = function(obj) {
			var included = obj.included;
			for(var key in obj) {
				this.fn[key] = obj[key];
			}
			included && included.call(__class);
		};

		__class.fn.init = function() {};

		return __class;
	};

	// ------------------------------------------

	var Tab = new Class;

	// 클래스 정적 멤버(함수) 확장
	Tab.extend({
		'find'     : function() {},
	});

	// 프로토타입 인스턴스 멤버(메소드) 확장
	Tab.include({
		'init'     : function() {},
		'next'     : function() {},
		'destroy'  : function() {},
	});

	// ------------------------------------------

	var tab = new Tab;

	// 인스턴스 메소드 next() 사용 가능
	tab.next();
	```

	클래스 공통 프로퍼티 공유: 모듈(재사용 가능한 코드) 활용

	```js
	// 공통 모듈
	var module = {};

	// 클래스 정의
	var Tab = new Class;
	var Gallery = new Class;

	// 각 클래스 멤버로 공통 모듈 설정
	Tab.include(module);
	Gallery.include(module);
	```

4. ##### 클래스 상속 & 프로토타입 활용

	> Javascript는 클래스와 인스턴스를 구별하는 언어가 아닌, 프로토타입 기반 언어로 새로운 객체의 초기 속성을 설정할 때 템플릿(Template)으로 사용할 수 있는 객체인 프로토타입 개념을 제공. 모든 객체는 다른 객체의 프로토타입이 되어 자신의 속성을 공유할 수 있으며 이는 상속과 동일한 개념.

	```js
	// 클래스 정의
	var Animal = new Class;
	var Dog = new Class;

	// Animal 프로토타입 멤버(메소드) 확장
	Animal.include({
		'breath': function() {}
	});

	// Dog 클래스에 Animal 프로토타입 객체 상속
	Dog.fn = new Animal;

	// Dog 클래스 인스턴스 생성
	var happy = new Dog;

	// Animal로부터 상속받은 속성
	happly.breath();

	```

5. ##### 클래스 라이브러리 상속 기능 추가

	```js
	var Class = function(Super) {

		function __class() {
			this.init.apply(this, arguments);
		};

		// 슈퍼 클래스 멤버 상속
		if(Super) {
			var subClass       = function(){};
			subClass.prototype = new Super; // Super.prototype
			__class.prototype  = new subClass;
		}

		__class.fn        = __class.prototype;
		__class.fn.parent = __class;
		__class._super    = __class.__proto__;

		__class.extend = function(obj) {
			var extended = obj.extended;
			for(var key in obj) {
				this[key] = obj[key];
			}
			extended && extended.call(__class);
		};

		__class.include = function(obj) {
			var included = obj.included;
			for(var key in obj) {
				this.fn[key] = obj[key];
			}
			included && included.call(__class);
		};

		__class.fn.init = function() {};

		return __class;
	};

	// ------------------------------------------

	var Animal = new Class;
	Animal.include({
		'breath': function() {}
	});

	// Animal 슈퍼 클래스로부터 속성 상속
	var Cat = new Class(Animal);

	// ------------------------------------------

	var lia = new Cat;
	lia.breath();
	```

6. ##### 함수 호출

	> Javascript의 함수는 객체일 뿐이지만, 호출 가능한 객체라는 점이 다름. 함수를 어디에서 호출했느냐에 따라 컨텍스트(this)는 달라짐. Javascript 함수 호출 시 컨텍스트가 변경되는 이유는 컨텍스트를 변경하는 방법으로 상태를 공유(이벤트 콜백)하는 언어이기 때문. (최신 브라우저에서는 Funtion.prototype.bind 함수로 동일한 동작 가능)

	apply로 원래 컨텍스트를 포함하는 다른 익명 함수 내에 콜백함수를 감싸면 깔끔하게 컨텍스트를 변경하여 함수를 실행할 수 있음.

	```js
	function proxy(fn, context) {
		return function() {
			fn.apply(context, arguments);
		}
	}
	```

7. ##### 클래스 라이브러리 컨텍스트 설정

	```js
	var Class = function(Super) {
		var __class = function() {};

		if (Super) {
			var subClass = function() {};
			subClass.prototype = new Super;
			__class.prototype = new subClass;
		}

		__class.fn        = __class.prototype;
		__class.fn.parent = __class;
		__class._super    = __class.__proto__;

		__class.extend = function(obj) {
			var extended = obj.extended;
			for(var key in obj) {
				__class[key] = obj[key];
			}
			extended && extended.call(__class);
		};

		__class.include = function(obj) {
			var included = obj.included;
			for(var key in obj) {
				__class.fn[key] = obj[key];
			}
			included && included.call(__class);
		};

		__class.proxy = function(fn) {
			var self = this;
			return function() {
				fn.apply(self, arguments);
			}
		};

		__class.fn.proxy = __class.proxy;

		__class.fn.init = function() {};

		return __class;
	};

	```