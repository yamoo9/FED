/*! main.js © yamoo9.net, 2015 */
(function(global, $, undefined){
	'use strict';

	/**
	 * --------------------------------
	 * Dimensions
	 * --------------------------------
	 */
	var $box = $('.box');
	// jQuery 이벤트
	// [추가] on, bind, live, delegate
	// [제거] off, unbind, die, undelegate
	$box.bind('click', function(){
		$(this).innerWidth(function(index, width){
			var change_value = width * 2;
			if (change_value > 600) {
				change_value = 600;
				$(this).unbind('click'); // 이벤트 제거
			}
			console.log('clicked'); // 이벤트 제거 유무 확인
			return change_value;
		});
	});

	/**
	 * --------------------------------
	 * Manipulation
	 * --------------------------------
	 */
	var $beforeBox = $('<div id="box-before">before box</div>');

	// 생성한 jQuery 객체 요소.insertBefore(jQuery 객체 요소);
	$beforeBox.insertBefore('.box');

	// 생성한 jQuery 객체 요소.insertAfter(jQuery 객체 요소);
	$('<div id="box-after">after box</div>').insertAfter($box);

	// jQuery 객체 요소.before(생성한 jQuery 객체 요소);
	// jQuery 객체 요소.after(생성한 jQuery 객체 요소);
	$box.before('<p class="before-box">Lorem ipsum dolor.</p>');
	$box.after('<p class="after-box">dolor Lorem ipsum.</p>');

})(window, window.jQuery);