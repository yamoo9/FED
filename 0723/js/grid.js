var toggleBtn = $('.grid-toggle'),
	grid      = $('.grid');

toggleBtn.onclick = function() {
	// grid show 클래스 속성 값을 추가/제거 한다.

	// 크로스 브라우징을 위한 과거 방식
	// --------------------------------------------
	// if ( grid.getAttribute('class') === 'grid' ) {
	// 	grid.setAttribute('class', 'grid show');
	// } else {
	// 	grid.setAttribute('class', 'grid');
	// }

	// 새로운 classList 활용 방식
	// --------------------------------------------
	grid.classList.toggle('show');

	// if ( grid.classList.contains('show') ) {
	// 	grid.classList.remove('show');
	// } else {
	// 	grid.classList.add('show');
	// }

	// 기본동작 차단
	return false;
}