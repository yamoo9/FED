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
wallpaperInit();

// 월페이퍼 초기화
function wallpaperInit() {
	// console.log('document clicked');
	wallpaper.style.cssText = 'height: ' + viewportHeight + 'px; background: url(images/wallpaper-01.jpg) no-repeat center top; background-size: cover;';
};