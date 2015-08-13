(function(global, $, undefined){
	'use strict';

	global.settingGoogleFonts = function(families) {

		// 유효성 검사
		if (!window.jQuery) { throw console.error('jQuery를 호출하셔야 합니다.');}

		if(!window.WebFontConfig) {
			window.WebFontConfig = {
				'google': {
					'families': $.isArray(families) ? families : [families]
				}
			};
		}

		var families_arr = $.isArray(families) ? families : [].push(families),
			protocol     = document.location.protocol === 'https' ? 'https' : 'http';

		var $wf           = $('<script>'),
			$first_script = $('script').eq(0);

		$wf.attr({
			'src'   : protocol + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js',
			'async' : true
		});

		$first_script.before($wf);

	}

})(window, window.jQuery);