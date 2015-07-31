/*! audio.js © yamoo9.net, 2015 */

(function(global, $){
	'use strict';

	// 오디오 지원 유무를 파악
	// console.log( $.hasClass( $.$('html'), 'audio') );
	// console.log( !!Modernizr.audio );

	var body = $.$('body'),
		audioFile = $.createEl('audio');

	$.append(body, audioFile);

	// $.attr( audioFile, {
	// 	'src'      : 'media/hypnotik.mp3',
	// 	'type'     : 'audio/mpeg',
	// 	'controls' : true,
	// });

	$.attr( audioFile, 'src', 'media/hypnotik.mp3' );
	$.attr( audioFile, 'type', 'audio/mpeg' );
	$.attr( audioFile, 'controls', true );
	$.attr( audioFile, 'autoplay', true );
	$.attr( audioFile, 'muted', true );

	audioFile.oncanplay = playAudio.bind(audioFile);
	// document.onclick = pauseAudio.bind(audioFile);

	document.onkeydown = function(event) {
		var key = event.keyCode || event.which;
		// 27 === ESC
		if ( key === 27 ) {
			pauseAudio.call(audioFile);
		}
	}

	function playAudio() {
		this.play();
	}

	function pauseAudio() {
		this.pause();
	}

	function stopAudio() {
		this.pause();
		this.currentTime = 0;
	}

})(window, window.y9);