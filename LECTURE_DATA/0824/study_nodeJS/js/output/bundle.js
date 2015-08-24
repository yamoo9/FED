/*! dom-helper.js © yamoo9.net, 2015 */

(function(global, dom){
	'use strict';

	var doc = global.document;

	dom.id = function(name) {
		return doc.getElementById(name);
	};

})(window, (domHelper || {}));

/*! util.js © yamoo9.net, 2015 */

function Util(name) {
	this.name = name;
}

Util.fn = Util.prototype;

Util.fn.getName = function() {
	return this.name;
};

/*! app.js © yamoo9.net, 2015 */

var GemStore = {
	'name': 'angularJS App',
	'product_year': 2012
};

