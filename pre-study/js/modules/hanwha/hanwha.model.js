(function(){
	'use strict';

	if (!global.hanwha) {
		Object.defineProperty(global, 'hanwha', { 'value': {} });
	}

	Object.defineProperty(hanwha, 'model', {
		'value': (function() {
			var that = this;
			var _database = {};

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
				}
			}

		})()
	});

})(window);