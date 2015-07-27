/**
 * ======================================================================
 * 선택(Selecting) | 탐색(Traversing)
 * ======================================================================
 */

/**
 * ----------------------------------------------------------------------
 * $() 함수
 * 대상을 손쉽게 선택할 수 있는 선택자 헬퍼 함수
 * ----------------------------------------------------------------------
 */
function $(selector, context) {

	validate( isString(selector), '첫번째 전달인자는 문자열이어야 합니다.' );
	validate( context && isElement(context), '두번째 전달인자는 DOM 객체(요소노드)이어야 합니다.' );

	var nodeList        = (context || document).querySelectorAll(selector),
		nodeList_length = nodeList.length;

	return nodeList_length === 1 ? nodeList[0] : nodeList;

}

/**
 * ----------------------------------------------------------------------
 * find() 함수
 * 전달된 첫번째 인자(부모 요소노드)에서
 * 자손(CSS 선택자) 요소노드를 찾는 함수
 * ----------------------------------------------------------------------
 */
function find(parentEl, childSelector) {
	var children     = parentEl.querySelectorAll(childSelector),
		children_len = children.length;

	if (children_len === 0) {
		return null;
	} else if ( children_len === 1 ) {
		return children[0];
	} else {
		return children;
	}
}

/**
 * ----------------------------------------------------------------------
 * chilren() 함수
 * children(parentEl, childrenSelector)
 * ----------------------------------------------------------------------
 */
function children(parentEl, childrenSelector) {
	var childEl     = find(parentEl, childrenSelector),
		childEl_len = childEl.length,
		els         = []; // 배열
	while(childEl_len--) {
		var el = childEl[childEl_len];
		if (parentEl === el.parentNode) {
			els.push(el);
		}
	}
	return els.length === 0 ? null : els.length === 1 ? els[0] : els;
}

/**
 * ======================================================================
 * 조작(Manipulation)
 * ======================================================================
 */

/**
 * ----------------------------------------------------------------------
 * hasClass() 함수
 * hasClass(el, 'on');
 * ----------------------------------------------------------------------
 */
function hasClass(el, className) {
	validate( isElement(el), '첫번째 전달인자는 DOM 요소노드여야만 합니다.' );
	validate( isString(className), '두번째 전달인자 값은 문자여야만 합니다.' );

	var classList = attr(el, 'class');
	classList = (classList || '').split(' ');

	for(var i=classList.length-1; i>-1; i--) {
		if ( classList[i] === className ) {
			return true;
		}
	}
	return false;
}

/**
 * ----------------------------------------------------------------------
 * addClass() 함수
 * addClass(el, className)
 * ----------------------------------------------------------------------
 */
function addClass(el, className) {
	if ( !hasClass(el, className) ) {
		var oldClasses = attr(el, 'class') || '';
		el.setAttribute( 'class', (oldClasses + ' ' + className).trim() );
	}
}

/**
 * ----------------------------------------------------------------------
 * attr()
 * attr(el, key)        // GET
 * attr(el, key, value) // SET
 * ----------------------------------------------------------------------
 */
function attr(el, prop, value) {
	validate(isElement(el), '첫번째 인자는 요소노드여야 함.');
	validate(isString(prop), '두번째 인자는 문자여야 함.');

	if( !value ) {
		return el.getAttribute(prop);
	} else {
		el.setAttribute(prop, value);
	}
}

/**
 * ----------------------------------------------------------------------
 * getStyle(설정된 스타일 속성) 함수
 * ----------------------------------------------------------------------
 */
function getStyle(el, prop) {
	if ( window.getComputedStyle ) {
		return window.getComputedStyle(el)[prop];
	} else {
		return el.currentStyle[prop];
	}
}


/**
 * ======================================================================
 * 유틸리티(Utility)
 * ======================================================================
 */

/**
 * ----------------------------------------------------------------------
 * CSS3 신기능을 검수하는 헬퍼함수
 * ----------------------------------------------------------------------
 */
function checkCSS3Feature(feature) {
	var html = $('html'),
		body = $('body');
	if ( feature in body.style ) {
		addClass(html, feature);
	} else {
		addClass(html, 'no-' + feature);
	}
}

/**
 * ----------------------------------------------------------------------
 * 브라우저 식별자로 대상을 구분하는 헬퍼함수
 * ----------------------------------------------------------------------
 */

function checkUserAgent(device_name) {
	var userAgent = navigator.userAgent.toLowerCase(),
		html      = $('html');
	if ( userAgent.indexOf(device_name) > -1 ) {
		addClass(html, device_name);
	}
}

/**
 * ----------------------------------------------------------------------
 * 유효성 검사 헬퍼 함수
 * isNumber()
 * isString()
 * isBoolean()
 * isFunction()
 * isArray()
 * isObject()
 * ----------------------------------------------------------------------
 */
function isNumber(num) {
	return typeof num === 'number';
}

function isString(str) {
	return typeof str === 'string';
}

function isBoolean(boo) {
	return typeof boo === 'boolean';
}

function isFunction(fnc) {
	return typeof fnc === 'function';
}

function isArray(arr) {
	return !isObject(arr);
}

function isObject(obj) {
	return typeof obj === 'object' && !obj.push;
}

/**
 * ----------------------------------------------------------------------
 * isElement() 헬퍼 함수
 * isNodeList() 헬퍼 함수
 * 요소노드인지, 노드리스트인지 파악하는 함수
 * ----------------------------------------------------------------------
 */
function isElement(el) {
	return el ? el.nodeType === 1 : false;
}

function isNodeList(list) {
	return !!(list && list.length > 0 && list.item);
}

/**
 * ----------------------------------------------------------------------
 * validate() 헬퍼 함수
 * 전달인자 [조건, 오류메시지]
 * ----------------------------------------------------------------------
 */
function validate(condition, error_msg) {
	if(typeof condition !== 'undefined' && !condition) {
		throw new TypeError(error_msg);
	}
}


