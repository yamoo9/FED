/*! clickEvent.js © yamoo9.net, 2015 */
var html = document.documentElement;

html.className = 'js';

/**
 * --------------------------------
 * 문서 로드 이후 초기화 업무 수행
 * --------------------------------
 */
// 문서에서 #wallpaper를 찾는다.
// 변수(Variable) 선언
var wallpaper = document.getElementById('wallpaper');
// console.log(wallpaper);

// 스타일을 설정한다. (화면 가득 이미지 채우기)
// wallpaper.style.height             = '100vh';
// wallpaper.style.backgroundImage    = 'url(images/wallpaper-01.jpg)';
// wallpaper.style.backgroundRepeat   = 'no-repeat';
// wallpaper.style.backgroundPosition = 'center top';
// wallpaper.style.backgroundSize     = 'cover';

// window.innerHeight // IE 9+
// document.documentElement.clientHeight
var viewportHeight = html.clientHeight;


// 사용자가 문서(document)를 클릭하면 뭔가를 수행.
// 사용자가 문서를 클릭하면 wallpaperInit 함수를 수행.
// document.onclick = wallpaperInit;

// 함수 실행
// wallpaperInit();

// 월페이퍼 초기화
function wallpaperInit() {
	// console.log('document clicked');
	wallpaper.style.cssText = 'height: ' + viewportHeight + 'px; background: url(images/wallpaper-01.jpg) no-repeat center top; background-size: cover;';
	return false;
};


/**
 * --------------------------------
 * .controller 메뉴 제어
 * DOM Selector API - IE 8+
 * .querySelector()
 * .querySelectorAll()
 * --------------------------------
 */
// IE 9+
// var controller = document.getElementsByClassName('controller')[0];
var controller = document.querySelector('.controller');
// console.log(controller);

// var controller_btns = controller.getElementsByTagName('a');
// var controller_btns = controller.querySelectorAll('a');
var controller_btns = document.querySelectorAll('.controller [role]');
// console.log(controller_btns);

controller_btns[0].onclick = function() {
	// console.log(this.firstChild.nodeValue);
	wallpaper.style.backgroundImage = 'url(images/wallpaper-01.jpg)';
	var activeEl = controller.querySelector('.on');
	activeEl.className = '';
	this.className = 'on';
	return false;
};

controller_btns[1].onclick = function() {
	// console.log(this.firstChild.nodeValue);

	// wallpaper의 배경이미지 값을 변경합니다.
	wallpaper.style.backgroundImage = 'url(images/wallpaper-02.jpg)';

	// 활성화(on)된 요소를 찾아서 활성화 클래스를 제거합니다.
	var activeEl = controller.querySelector('.on');
	activeEl.className = '';

	// 클릭된 버튼(a요소)에 활성화 클래스를 설정합니다.
	this.className = 'on';
	return false;
};

controller_btns[2].onclick = function() {
	// console.log(this.firstChild.nodeValue);
	wallpaper.style.backgroundImage = 'url(images/wallpaper-03.jpg)';
	var activeEl = controller.querySelector('.on');
	activeEl.className = '';
	this.className = 'on';
	return false;
};

controller_btns[3].onclick = function() {
	// console.log(this.firstChild.nodeValue);
	wallpaper.style.backgroundImage = 'url(images/wallpaper-04.jpg)';
	var activeEl = controller.querySelector('.on');
	activeEl.className = '';
	this.className = 'on';
	return false;
};