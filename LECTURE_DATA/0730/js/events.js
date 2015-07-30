(function(global, y9){

	// window 로드 이벤트 발동되면 init() 함수 실행
	// 이미지까지 모두 다운로드 받은 다음에 실행
	global.onload = init;

	// UI 초기화 함수
	function init() {

		var detectDeviceWidth = detectDeviceWidthInit({
			// 'mobile': 480,
			'tablet': 1200,
			'deviceId': {
				'mobile': 'm',
				'tablet': 't',
				'desktop': 'd',
			}
		});

		// 로딩이 되었을 때, 실행
		detectDeviceWidth();

		// 창 크기를 조정할 때, 실행
		global.onresize = detectDeviceWidth;
	}

	function detectDeviceWidthInit(options) {

		// 유효성 검사
		y9.validate( y9.isObject(options), '객체를 전달해야 합니다.' );

		// 지역 함수
		function getDeviceWidth() {
			return global.innerWidth || y9.$('body').clientWidth;
		}

		// 지역 변수
		// 기본 옵션
		var defaults = {
				'mobile': 800,
				'tablet': 1100,
				'targetEl': y9.$('body'),
				'deviceId': {
					'mobile': 'mobile',
					'tablet': 'tablet',
					'desktop': 'desktop',
				}
			}, config;

		// 함수 실행 시, 사용자 정의 옵션과 기본 옵션 오버라이딩
		config = options ?
			y9.override(defaults, options) :
			defaults;


		// Javascript Closure Function
		return function() {
			var detectW = getDeviceWidth(),
				target = config.targetEl;

			if ( detectW < config.mobile ) {
				// 제거
				y9.hasClass(target, config.deviceId.tablet) && y9.removeClass(target, config.deviceId.tablet);
				y9.hasClass(target, config.deviceId.desktop) && y9.removeClass(target, config.deviceId.desktop);
				// 추가
				y9.hasClass(target, config.deviceId.mobile) || y9.addClass(target, config.deviceId.mobile);
			} else if( detectW >= config.mobile && detectW < config.tablet ) {
				// 제거
				y9.hasClass(target, config.deviceId.mobile) && y9.removeClass(target, config.deviceId.mobile);
				y9.hasClass(target, config.deviceId.desktop) && y9.removeClass(target, config.deviceId.desktop);
				// 추가
				y9.hasClass(target, config.deviceId.tablet) || y9.addClass(target, config.deviceId.tablet);
			} else {
				// 제거
				y9.hasClass(target, config.deviceId.mobile) && y9.removeClass(target, config.deviceId.mobile);
				y9.hasClass(target, config.deviceId.tablet) && y9.removeClass(target, config.deviceId.tablet);
				// 추가
				y9.hasClass(target, config.deviceId.desktop) || y9.addClass(target, config.deviceId.desktop);
			}
		}
	}

})(window, window.yamoo9);