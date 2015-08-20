(function(global, undefined){
	'use strict';

	// Ajax를 수행하기 위한 XMLHttpRequest 객체 생성 (생성자 함수로부터)
	var xhr = new XMLHttpRequest,
		jsonXhr = new XMLHttpRequest;

	// xhr 객체 콘솔에 로그(기록)
	// console.log(xhr);

	// console.log('통신 준비');

	// xhr.open()
	// 첫번째 전달인자: 어떤 방식(Method)으로 서버와 통신할 것인가?
	// 두번째 전달인자: 어떤 데이터(Data)를 가져올 것인가?
	// 세번째 전달인자: 비동기적으로 통신할 것인가?
	xhr.open('GET', 'data/data.txt'); // false: 동기 통신 방식
	jsonXhr.open('GET', 'data/data.json');
	// console.log('통신을 위한 오픈');

	// 서버 통신
	// xhr.send();
	jsonXhr.send();

	jsonXhr.onreadystatechange = function() {
		if(this.status === 200 && this.readyState === 4) {
			var recieveData = this.responseText;
			var convertObject = JSON.parse(recieveData);
			console.log(convertObject);
		}
	};

	// 상태 변경을 감지하여 이벤트 핸들러 실행
	xhr.onreadystatechange = function() {
		if(this.status === 200 && this.readyState === 4) {
			// console.log(this.responseText);
			var html = ['<div id="ajax-data">', '<p>'+ this.responseText +'</p>','</div>'].join('');
			document.body.innerHTML = html + document.body.innerHTML;
		}
	};


	// xhr.onload = function() {
	// 	// 서버가 보낸 수신된 데이터 파일 내용 출력
	// 	var resTxt = xhr.responseText;

	// 	console.log(resTxt);
	// }

	// console.log('통신');

})(window);