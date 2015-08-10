;(function(global, undefined){
	'use strict';

	// Cat 데이터 객체 생성
	var sleepingCat = new BioCreature(function() {
		this.type = 'Cat';
		this.current_state = 'sleep';
		this.name = 'tedious';
	});

	// 데이터 확인
	// console.dir(sleepingCat);

	var sleepingRaino = new BioCreature(function() {
		this.type = 'Raino';
		this.current_state = 'awake';
		this.name = 'js-raino';
	});

	// 데이터를 토대로 View 구현 (HTML에 구조를 설계하고 화면에 보이도록 구현화)
	// 템플릿 설계(디자인)
	var template = '';

	template += '<div id="bio-'+ sleepingCat.type.toLowerCase() +'">';
	template += 	'<h3 class="bio-'+ sleepingCat.type.toLowerCase() +'-type">'+ sleepingCat.type +'</h3>';
	template += 	'<p class="bio-'+ sleepingCat.type.toLowerCase() +'-status-desc">'+ sleepingCat.displayStatus() +'</p>';
	template += 	'<figure>';
	template += 		'<img src="http://lorempixel.com/300/300/animals/7/" width="300" height="300" alt="'+ sleepingCat.name +'">';
	template += 		'<figcaption>'+ sleepingCat.current_state + ' ' + sleepingCat.name +'</figcaption>';
	template += 	'</figure>'
	template += '</div>';

	var other_template = [
		'<div id="bio-'+ sleepingRaino.type.toLowerCase() +'">',
			'<h3 class="bio-'+ sleepingRaino.type.toLowerCase() +'-type">'+ sleepingRaino.type +'</h3>',
			'<p class="bio-'+ sleepingRaino.type.toLowerCase() +'-status-desc">'+ sleepingRaino.displayStatus() +'</p>',
			'<figure>',
				'<img src="http://lorempixel.com/300/300/animals/1/" width="300" height="300" alt="'+ sleepingRaino.name +'">',
				'<figcaption>'+ sleepingRaino.current_state + ' ' + sleepingRaino.name +'</figcaption>',
			'</figure>',
		'</div>',
	].join('');

	// console.log(other_template);

	document.body.innerHTML = template + other_template;

	// 전역에서 접근 가능하도록 설정
	global.sleepingCat = sleepingCat;

})(window);