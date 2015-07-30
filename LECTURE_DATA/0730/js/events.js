(function(global, y9){

	// window 로드 이벤트 발동되면 init() 함수 실행
	// 이미지까지 모두 다운로드 받은 다음에 실행
	global.onload = init;

	// UI 초기화 함수
	function init() {

		// detectDeviceWidthInit() 함수가 실행되면서
		// 클로저 함수를 반환 detectDeviceWidth 변수에 참조
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
		// detectDeviceWidth 는 클로저 함수
		detectDeviceWidth();

		// 창 크기를 조정할 때, 실행
		// detectDeviceWidth 는 클로저 함수
		global.onresize = detectDeviceWidth;
	}













	/**
	 * 기기(장치)의 폭을 감지하는 함수(상위 스코프)
	 * @param  {Object} options 사용자정의 객체
	 * @return {Function}       클로저 함수
	 */
	function detectDeviceWidthInit(options) {

		// ------------------------------------------------------------------------------------
		// 유효성 검사
		y9.validate( y9.isObject(options), '객체를 전달해야 합니다.' );

		// ------------------------------------------------------------------------------------
		// 지역 함수
		// 상위 스코프 함수
		// 글로벌 스코프에서는 접근 불가
		// 하지만 클로저 함수에서는 접근 가능
		function getDeviceWidth() {
			return global.innerWidth || y9.$('body').clientWidth;
		}

		function removeClass(id) {
			y9.hasClass(config.targetEl, config.deviceId[id]) && y9.removeClass(config.targetEl, config.deviceId[id]);
		}

		function addClass(id) {
			y9.hasClass(config.targetEl, config.deviceId[id]) || y9.addClass(config.targetEl, config.deviceId[id]);
		}

		// ------------------------------------------------------------------------------------
		// 지역 변수
		// 상위 스코프 함수
		// 글로벌 스코프에서는 접근 불가
		// 하지만 클로저 함수에서는 접근 가능
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
		// 사용자의 인터렉션과 상관 없이 1회만 실행
		config = options ? y9.override(defaults, options) : defaults;



		// ------------------------------------------------------------------------------------
		// 클로저 함수(반환 함수)
		// 초기화 이후, 창 크기를 조정할 때 마다 실행되는 함수
		return function() {

			// 상위 스코프의 getDeviceWidth() 함수 실행
			// 클로저이기 때문에 가능
			var detectW = getDeviceWidth();

			// 상위 스코프의 config 변수 참조
			// 클로저이기 때문에 가능
			if ( detectW < config.mobile ) {
				// 제거
				y9.each(['tablet', 'desktop'], removeClass);
				// 추가
				addClass('mobile');
			}
			else if( detectW >= config.mobile && detectW < config.tablet ) {
				y9.each(['mobile', 'desktop'], removeClass);
				addClass('tablet');
			} else {
				y9.each(['mobile', 'tablet'], removeClass);가
				addClass('desktop');
			}

		}
	}

})(window, window.yamoo9);