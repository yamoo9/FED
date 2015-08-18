;(function(global, $, undefined){
	'use strict';
	$.cache = function(element) {
		if ( !$.data(element, '$this') ) {
			$.data(element, '$this', $(element));
		}
		return $.data(element, '$this');
	};

	$.check = (function(){
		var toString = Object.prototype.toString;
		return function(data, type) {
			var result;
			switch( toString.call(data) ) {
				case '[object Null]':
					result = 'null';
				break;
				case '[object Undefined]':
					result = 'undefined';
				break;
				case '[object Number]':
					result = 'number';
				break;
				case '[object String]':
					result = 'string';
				break;
				case '[object Boolean]':
					result = 'boolean';
				break;
				case '[object Function]':
					result = 'function';
				break;
				case '[object Array]':
					result = 'array';
				break;
				case '[object Object]':
					result = 'object';
			}

			return result === type;
		}
	})();
})(window, window.jQuery);