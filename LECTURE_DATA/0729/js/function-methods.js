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


function override(obj1, obj2) {
	for( var key in obj2 ) {
		obj1[key] = obj2[key];
	}
	return obj1;
}

function draw(user) {
	// 수행 ....

	var defaults = {
		'where' : '화실',
		'how'   : '핸드 드로잉으로',
		'who'   : '나'
	};

	var config = override(defaults, user);
	console.log(config);

	var sentence = config.who +'은(는) ' + config.where + '에서 ' + config.how + ' 그림을 그립니다.';

	console.log(sentence);

	if ( config.callback ) {
		config.callback();
	}

	// for ( var key in argumentMap ) {
	// 	console.log(key, argumentMap[key]);
	// }

	// callback.call(argumentMap); // 일을 다 처리하고 실행
}

draw({
	'where' : '화장실',
	'how'   : '물 묻혀서 손으로',
	'who'   : '당신',
	'callback': function() {
		console.log(this, ': 모든 일이 종료되었습니다.');
	}
});