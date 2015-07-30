// 전역
var counter = (function(global){

	// 지역
	var _count = 0;

	return {
		'increment': function() {
			_count++;
		},
		'decrement': function() {
			_count--;
		},
		'double': function() {
			_count *= _count;
		},
		'get': function() {
			console.log(_count);
		}
	};

})(window);

