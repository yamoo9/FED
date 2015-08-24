# type-check 모듈

자바스크립트의 데이터 유형을 체크하여 해당 값을 문자열로 반환하는 모듈입니다.

## 사용법

```js
var type = require('check-type');
var str = '',
	obj = {};

type(str)  // 'string'
type(data) // 'object'
```