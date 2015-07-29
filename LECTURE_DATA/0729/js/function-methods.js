/*! main.js © yamoo9.net, 2015 */

/**
 * --------------------------------
 * Function Object Methods
 * function() {}
 * new Function()
 * Function.prototype.call
 * Function.prototype.apply
 * Function.prototype.bind
 * --------------------------------
 */

function showTime() {
	// arguments

	console.log(arguments);

	arguments[0] = true;

	console.log('arguments.push??? => ',  !!arguments.push);

	var i=0, l=arguments.length;

	for(; i<l; i++) {
		console.log(arguments[i]);
	}

	// console.log(who, when, where, how, what);
}

// showTime(4, 3, '해와달');


// 자바스크립트 위임(Delegation)
// ---------------------------------------------
// 다른 객체(Array)의 멤버(push)를 위임해서 가져다
// 유사배열(arguments 또는 NodeList)에 사용할 수 있다.

function makeArray(pseudo_arr) {
	if ( pseudo_arr.length === undefined ) { return; }
	// return Array.prototype.slice.call(pseudo_arr);
	return [].slice.call(pseudo_arr);
}


// 객체 복제 및 덮어쓰기 헬퍼 함수
function override(obj1, obj2) {
	for( var key in obj2 ) {
		obj1[key] = obj2[key];
	}
	return obj1;
}

function bind(fn, owner) {
	return function() {
		fn.apply(owner, arguments);
	}
}

// draw() 함수
function draw(user, callback) {

	var id = Math.round(Math.random() * 10);

	// 함수 기본 설정 객체
	var defaults = {
		'where' : '화실',
		'how'   : '핸드 드로잉으로',
		'who'   : '나'
	};

	// 설정 객체 config 정의
	var config = (user && user.constructor === Object) ?
			override(defaults, user) :
			defaults;

	// 문장 작성
	var sentence = config.who +'은(는) ' + config.where + '에서 ' + config.how + ' 그림을 그립니다.';

	if ( config.finished && config.finished.constructor === Function) {
		config.finished();
	}

	if (callback && typeof callback === 'function') {
		// callback(); // this === window

		callback.call(config, sentence, id); // this === config

		callback.apply(config, [sentence, id]); // this === config

	}

	return sentence;
}

var user_settings = {
	'where'    : '화장실',
	// 'how'      : '물 묻혀서 손으로',
	// 'who'      : '당신',
	// 'finished' : function() {
	// 	console.log(this, '\n\n모든 일을 완료하였습니다.');
	// }
}

// draw() 함수에 객체 리터럴 사용자 정의 설정 전달
draw(user_settings, function(sentence, id) {
	console.log(this, sentence);
	sentence += '♥';
	console.log(sentence, id);
});