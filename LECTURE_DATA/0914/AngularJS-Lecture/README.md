# AngularJS v1.4.x

<!-- ============================================================================= -->
## AngularJS를 공부하기 전에 알아두어야 할 것은?

**필수**
- `HTML`
- `CSS`
- `DOM`
- `Javascript`

**권장**
- Automated Testing (`Gulp` + `Karma`)
- `BDD` or `TDD`

**옵션**
- `jQuery`

---

<!-- ============================================================================= -->
## jQuery Library vs AngularJS Framework

#### jQuery는 DOM 접근/조작/이벤트 처리에 특화된 라이브러리(Library).

- **장점**<br>
	배우기 쉽고, 대중적이며 개발을 쉽게 하는 플러그인 코드가 상당하다.

- **단점**<br>
	MVC 구조 패턴을 제공하지 않아, 비교적 유지보수가 쉽지 않다.

- **버전별 IE 브라우저 지원**<br>
	- v1.9 - IE6+
	- v2.x - IE9+

-

#### AngularJS는 MVC 구조를 제공하는 자바스크립트 프레임워크(Framework).

- **장점**<br>
	MVC 구조 패턴(DOM과 애플리케이션 로직을 분리하는데 최적)을 제공하고, CRUD 시스템 개발에 적합하다.
	양방향 데이터 바인딩, 라우터 등등을 제공한다.

- **단점**<br>
	처음엔 쉬워 보이나, 배우는데 굴곡이 많아 쉽지 않다.

- **버전별 IE 브라우저 지원**<br>
	- v1.0 - IE6+
	- v1.2 - IE8+
	- v1.3 - IE9+

-

#### 프레임워크를 사용하는 이유?!

프레임워크가 제공하는 구조 기반을 이용하기 때문에
개발 생산성이 높고, 다른 사람이 짠 코드도 이해하기 쉽다.

###### 유명한 자바스크립트 프레임워크
- Dojo
- YUI
- ExtJS (MVC 구조 골격 뿐만 아니라 많은 것을 제공하나... 배우기 어렵고, 유지보수 또한 어렵다.)
- Ember
- Backbone (MVC 구조 골격이 간단하나, 제공되는 것이 많지 않아 만들어야 할 것이 많음.)

-

#### 결론! jQuery와 AngularJS는 역할이 다름.

jQuery와 Angular는 비교 대상으로 적합하지 않다.
오히려 라이브러리는 라이브러리끼지 비교를, 프레임워크는 프레임워크와 비교를 해야 한다.
무엇보다 AngularJS와 jQuery는 함께 사용하는데 아무런 문제가 없다.
(※ AngularJS Way에서는 가급적 jQuery를 사용하지 말라고 하나, 실상 함께 사용되는 경우가 많다.)

- [jQuery](http://jquery.com/) vs [Jindo](http://jindo.dev.naver.com/)
- [Sizzle](http://sizzlejs.com/) vs [bsSelector](https://github.com/projectBS/bsSelector)
- [AngularJS](http://angularjs.org/) vs [React](http://facebook.github.io/react/)


jQuery는 대상을 선택하고, 처리하는 과정을 다뤄야 하는 반면...<br>
AngularJS는 필요한 로직만 짜면 되기 때문에 코드 량이 줄어든다.

jQuery는 사용자가 직접 데이터 바인딩 하는 반면...<br>
AngularJS는 선언만 해주면 이를 자동으로 처리(바인딩되는 컨트롤러가 모델의 상태를 변경).

---

<!-- ============================================================================= -->
## AngularJS를 사용하면 어떤 점이 좋을까?

Javascript를 사용해 다이내믹한 웹 사이트를 만들 때, AngularJS를 사용하면 다음과 같은 점이 좋다.

- Angular는 Javascript 코드를 체계적으로 관리할 수 있도록 도와준다.
- Angular는 RWD(반응형 웹 사이트)를 빠르게 제작 가능하게 도와준다.
- Angular는 jQuery와 같은 다른 라이브러리와 함께 사용해도 문제가 없도록 설계되었다.
- Angular는 테스트를 통한 개발(TDD, BDD 등)이 손쉽다.

<!-- ============================================================================= -->
## AngularJS를 정의하자면?

HTML과 상호작용하는 클라이언트 사이드 자바스크립트 프레임워크<br>
Javascript에서 발생시킨 이벤트 처리를 HTML에게 어떻게 알릴 수 있을까?

<!-- ============================================================================= -->
### AngularJS 컨셉(Concept)

1. **지시자 Directive**<br>
	`HTML`에 직접 `ng-*` 표기를 함으로서 자바스크립트를 수행하도록 설정
	기능을 확장하기 위함. data-* 와 비슷.

2. **표현식 Expression**<br>
	연산된 결과 값을 화면에 출력

3. **모듈 Module**<br>
	애플리케이션 모듈 정의

4. **컨트롤러 Controller**<br>
	애플리케이션 모듈 컨트롤러 함수



<!-- ============================================================================= -->
### AngularJS 지시자(Directives)

**디렉티브란?**<br>
HTML 요소에 직접 마커(Angular를 실행시키거나, 자바스크립트 코드를 참조하는 Marker)를 추가하는 것을 말한다.

```html
<!DOCTYPE html>
<html lang="ko-KR" data-ng-app="angular-app">
	<head>
		<script src= "js/angular.min.js"></script>
	</head>
	<body data-ng-controller="linkController">
		...
	</body>
</html>
```

```js
var app = angular.module('angular-app',[])

app.controller('linkController', function(){
	alert('Angular와 연결되었습니다.');
});
```
<!-- - ng-app
	AngularJS 애플리케이션의 루트 엘리먼트(Root Element, <html> or <body>)에 적용
	모듈(Module) 코드를 연결할 수 있다.

- ng-init
	AngularJS 애플리케이션 초기(Initialization) 변수 설정 값을 적용
	일반적으로 사용되지 않으며 컨트롤러(Controller) 또는 모듈(Module)에서 초기화를 수행한다.

- ng-model
	AngularJS 애플리케이션 컨트롤 요소(`input`, `select`, ..)와 바인딩 처리

- ng-controller
- ng-click

- ng-show
- ng-hide
- ng-bind
- ng-repeat
- ng-src -->