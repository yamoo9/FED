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