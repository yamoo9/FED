/*! dom-helper.js © yamoo9.net, 2015 */

(function(global, dom){
	'use strict';

	var doc = global.document;

	dom.id = function(name) {
		return doc.getElementById(name);
	};

})(window, (domHelper || {}));