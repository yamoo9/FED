(function(global){
	'use strict';

	// global.hanwha 객체가 없을 경우, 정의
	if (!global.hanwha) {
		Object.defineProperty(global, 'hanwha', { 'value': {} });
	}

	// global.hanwha.model 객체 정의
	Object.defineProperty(hanwha, 'model', {
		'value': (function() {

			// 감춰진 멤버
			var _database = {};

			// 반환된 객체는 클로저로 상위 스코프의 지역 변수를 참조할 수 있음.
			return {
				'DB': _database,
				'createModel': function(id, value) {
					this.add(id, (value || []) );
				},
				'add': function(id, value) {
					if( typeof value !== 'object' ) { throw console.error('배열 또는 객체를 전달해야 합니다.') }
					if( value.constructor === Object ) {
						if (_database[id]) {
							_database[id].push(value);
						} else {
							_database[id] = [];
							_database[id].push(value);
						}
					} else {
						if (_database[id]) {
							_database[id] = _database[id].concat(value);
						} else {
							_database[id] = value;
						}
					}
				},
				'remove': function(id) {
					delete _database[id];
				},
				'contains': function(id) {
					return !!_database[id];
				},
				'get': function(id) {
					return this.DB[id];
				}
			};

		})()
	});

})(window);