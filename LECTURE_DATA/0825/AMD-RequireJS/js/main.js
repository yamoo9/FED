/*! main.js © yamoo9.net, 2015 */

// 환경 설정
require.config({

	'baseUrl': 'js/libs',

	'paths': {
		// Libs
		'modernizr'    : 'modernizr',
		'detectizr'    : 'detectizr',
		'jquery'       : 'jquery-2.1.4',
		'jquery.utils' : 'jquery.utils',
		// Plugins
		'jquery.darkNight' : '../plugins/jquery.darkNight',
	},

	'shim': {
		'detectizr': {
			'deps': ['modernizr']
		},
		'jquery.utils': {
			'deps': ['jquery']
		},
	}

});

// require() 호출
require([
	// 'detectizr',
	// 'jquery.utils',
	'jquery.darkNight'
], function() {

	$().darkNight();

});



