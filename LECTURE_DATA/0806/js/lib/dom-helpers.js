// 전역 변수 dom, IIFE 패턴으로 클로저 객체 참조
var dom = (function(global){

	var tester = createEl('div'),
		text;

	function createEl(el_name) {
		return global.document.createElement(el_name);
	}

	// 지역 변수, 함수
	function html(targetEl, htmlCode) {
		// GET
		if (!htmlCode) {
			return targetEl.innerHTML;
		}
		// SET
		else {
			targetEl.innerHTML = htmlCode;
		}
	}

	if (tester.innerText) {
		text = function(targetEl, text_content) {
			if (!text_content) {
				return targetEl.innerText;
			} else {
				targetEl.innerText = text_content;
			}
		}
	}
	// Firefox
	else {
		text = function() {
			if (!text_content) {
				return targetEl.textContent;
			} else {
				targetEl.textContent = text_content;
			}
		}
	}

	// 반환 객체 (클로저)
	return {
		'html': html,
		'text': text,
	};

})(window);