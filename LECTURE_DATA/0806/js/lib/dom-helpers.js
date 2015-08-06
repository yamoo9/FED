var dom = (function(global){
	// 지역의 변수, 함수를 참조

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

	function text(targetEl, text) {
		// GET
		if (!text) {
			if (targetEl.innerText) {
				return targetEl.innerText;
			} else {
				return targetEl.textContent; // FF
			}
		}
		// SET
		else {
			if (targetEl.innerText) {
				targetEl.innerText = text;
			} else {
				targetEl.textContent = text; // FF
			}

		}
	}

	// 반환 객체 (클로저)
	return {
		'html': html,
		'text': text,
	};

})(window);