/*! checkType.js © yamoo9.net, 2015 */
module.exports = function(data) {
	var isString = ({}).toString,
		dataType = isString.call(data);
	switch( dataType ) {
		case "[object Null]": return 'null';
		break;
		case "[object Undefined]": return 'undefined';
		break;
		case "[object Number]": return 'number';
		break;
		case "[object String]": return 'string';
		break;
		case "[object Boolean]": return 'boolean';
		break;
		case "[object Function]": return 'function';
		break;
		case "[object Array]": return 'array';
		break;
		case "[object Object]": return 'object';
	}
}