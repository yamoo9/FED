# yamoo9's CombineJS Module

combineJS 모듈은 Javascript 파일을 병합(압축)합니다.

```js
// combineJS 모듈 호출
var combineJS = require('yamoo9-combinejs');


// 전달인자가 문자열일 경우 처리
combineJS('js/dom-helper.js, js/util.js, js/app.js', './js/output/bundle.js');

// 전달인자가 리스트(배열)일 경우 처리
combineJS(
	[
		'js/dom-helper.js',
		'js/util.js',
		'js/app.js',
	],
	'js/output/bundle.js',
	true // 압축 옵션
);
```