var module_name = 'showMessageBox';

(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD 환경
		define(module_name, [], factory);
	}
	else if (typeof exports === 'object') {
		// Node/CommonJS 환경
		module.exports = factory;
	} else {
		// 웹 브라우저 전역객체
		window[module_name] = factory;
	}
})(function (msg) {
	console.log('show message box');
});