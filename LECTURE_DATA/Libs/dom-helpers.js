/**
 * ----------------------------------------------------------------------
 * 대상을 손쉽게 선택할 수 있는 선택자 헬퍼 함수
 * $함수 : CSS 선택자를 활용하여 문서 객체를 선택하는데 도움을 주는 함수
 * @param  {[string]} selector [CSS 선택자 표현식]
 * @return {[Node|NodeList]}   [문서객체, 객체집합을 반환]
 * ----------------------------------------------------------------------
 */
function $(selector, context) {

	// 유효성 검사
	// validate(조건, 조건이 참이면 에러를 띄우는)
	validate( isString(selector), '첫번째 전달인자는 문자열이어야 합니다.' );
	validate( context && isElement(context), '두번째 전달인자는 DOM 객체(요소노드)이어야 합니다.' );

	// 첫번째 인자(argument): 문자열
	// if ( !isString(selector) ) {
	// 	// throw new TypeError('message');
	// 	console.error('첫번째 전달인자는 문자열이어야 합니다.');
	// 	return; // 함수 종료
	// }

	// 두번째 인자: DOM 객체(요소노드, 1, nodeName)
	// if ( context && isElement(context) ) {
	// 	console.error('두번째 전달인자는 DOM 객체(요소노드)이어야 합니다.');
	// 	return;
	// }

	// 함수 내부 지역 변수 nodeList에 document.querySelectorAll() 방법을 사용하여
	// 전달받은 인자(매개변수) selector에 해당되는 DOM 객체를 찾아서 참조합니다.
	// 그리고 수집된 대상(노드리스트)의 개수를 파악하여 nodeList_length 변수에 참조합니다.

	// if(!context) {
	// 	context = document;
	// }

	var nodeList = (context || document).querySelectorAll(selector),
		nodeList_length = nodeList.length;

	// 만약 nodeList_length 변수가 참조하고 있는 값이 1이라면...
	if ( nodeList_length === 1 ) {
		// 수집된 nodeList의 첫번째 인덱스에 해당되는 요소를 반환합니다.
		return nodeList[0];
	}

	// 위 조건이 거짓이라면 수집된 nodeList를 그대로 반환합니다.
	return nodeList;

}

/**
 * --------------------------------
 * find() 함수
 * 전달된 첫번째 인자(부모 요소노드)에서
 * 자손(CSS 선택자) 요소노드를 찾는 함수
 * --------------------------------
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

// function findAll(list, childSelector) {
// 	validate( isElement(list) || isNodeList(list), 'DOM 요소노드 또는 노드리스트여야만 합니다.' );
// 	if (isElement(list)) {
// 		return list;
// 	} else {
// 		var listSet = [];
// 		for(var i=list.length; i<-1;i++) {
// 			listSet.add(find(list[i], childSelector));
// 		}
// 		return listSet;
// 	}
// }

/**
 * --------------------------------
 * chilren() 함수
 * children(parentEl, childrenSelector)
 * --------------------------------
 */
function children(parentEl, childrenSelector) {
	var childEl     = find(parentEl, childrenSelector),
		childEl_len = childEl.length,
		els         = []; // 배열
	while(childEl_len--) {
		var el = childEl[childEl_len];
		if (parentEl === el.parentNode) {
			// 조건이 참일 경우, 배열에 원소 수집(Collection)
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
 * --------------------------------
 * hasClass() 함수
 * --------------------------------
 */
// hasClass(el, 'on'); // true, false
function hasClass(el, className) {
	validate( isElement(el), '첫번째 전달인자는 DOM 요소노드여야만 합니다.' );
	validate( isString(className), '두번째 전달인자 값은 문자여야만 합니다.' );
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
 * ----------------------------------------------------------------------
 * CSS3 신기능을 검수하는 헬퍼함수
 * ----------------------------------------------------------------------
 */
function checkCSS3Feature(feature) {
	var html = $('html'),
		body = $('body');
	if ( feature in body.style ) {
		var html_old_class = html.getAttribute('class');
		// 조건이 참이면 실행되는 결과
		html.setAttribute('class', html_old_class + ' ' + feature);
	} else {
		var html_old_class = html.getAttribute('class');
		// 조건이 거짓이면 실행되는 결과
		html.setAttribute('class', html_old_class + ' ' + 'no-'+feature);
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
		var html_old_class = html.getAttribute('class');
		html.setAttribute('class', html_old_class + ' ' + device_name);
	}
}

/**
 * --------------------------------
 * 유효성 검사 헬퍼 함수
 * isNumber()
 * isString()
 * isBoolean()
 * isFunction()
 * isArray()
 * isObject()
 * --------------------------------
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
 * --------------------------------
 * isElement() 헬퍼 함수
 * isNodeList() 헬퍼 함수
 * 요소노드인지, 노드리스트인지 파악하는 함수
 * --------------------------------
 */
function isElement(el) {
	return el ? el.nodeType === 1 : false;
}

function isNodeList(list) {
	return !!(list && list.length > 0 && list.item);
}

/**
 * --------------------------------
 * validate() 헬퍼 함수
 * 전달인자 [조건, 오류메시지]
 * --------------------------------
 */
function validate(condition, error_msg) {
	if(typeof condition !== 'undefined' && !condition) {
		throw new TypeError(error_msg);
		// console.error(error_msg)
		// return; // 함수 종료
	}
}


