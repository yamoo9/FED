(function(global, y9){

	// UI 초기화 함수
	function init() {
		console.log('UI 초기화 완료');
	}

	function detectDeviceWidth() {
		var detectW = this.innerWidth || this.document.body.clientWidth;
		y9.addClass(this.document.body, 'w' + detectW);
	}

	// window 로드 이벤트 발동되면 init() 함수 실행
	// 이미지까지 모두 다운로드 받은 다음에 실행
	global.onload = init;

	global.onresize = detectDeviceWidth;

	// global.onunload = close;

	// global.onerror = function() {
	// 	console.log('error');
	// }

})(window, window.yamoo9);