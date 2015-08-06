(function(global, $){
	'use strict';

	var myFriendsList = [];

	function makeFriend(f_name, f_job, f_beverage) {
		return {
			'name'     : f_name;     // global.prompt('당신이 좋아하는 친구의 이름은?'),
			'job'      : f_job;      // global.prompt('그 친구의 직업은?'),
			'beverage' : f_beverage; // global.prompt('그 친구가 좋아하는 음료는?'),
		}
	}

	myFriendsList.push( makeFriend('희진', '놀이공원 매점원', '오곡라떼') );
	myFriendsList.push( makeFriend('경민', '국정원 비밀요원', '식혜') );

	console.log(myFriendsList);

	return;

	// DOM Element Selecting
	// 문서에서 #app 요소를 찾아와 app 변수에 참조한다.
	var app = document.querySelector('#app');

	// SET
	// app 요소에 텍스트 내용을 추가한다.
	$.text(app, 'Hi! My Name is '+ myFreind.name +'. My Job is '+ myFreind.job +'!!');

	// GET
	// 변수 origin_html_code에 app 요소의 html 코드를 가져와 참조한다.
	var origin_html_code = $.html(app);

	// SET
	// app 요소에 origin_html_code 문자열 뒤에 새로운 HTML 코드를 붙여 추가한다.
	$.html(app, origin_html_code + '<p>I like drink a '+ myFreind.beverage +'!</p>');

	// GET
	// app 요소에 설정된 text 값, html 값을 각각 출력한다.
	console.log( '[[TEXT]] ⇒ ', $.text(app) );
	console.log( '[[HTML]] ⇒ ', $.html(app) );

})(window, window.dom);