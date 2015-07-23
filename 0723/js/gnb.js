var gnb = $('#gnb'),
	gnb_d1_links = $('#gnb .lv-1 > li > a');

var count = 0;

// while(count < 10) {
	// console.log(count); // 0
	// count = count + 1;
	// count += 1;
	// ++count; // 1
// }

/**
 * --------------------------------
 * 자바스크립트 반복문: while문
 * --------------------------------
 */

var k = 0,
	l = gnb_d1_links.length;

while(k < l) {
	gnb_d1_links[k].onfocus = gnbD1Focus;
	// gnb_d1_links[k].onblur = gnbD1Blur;
	k++;
}

function gnbD1Focus() {
	// this.className = 'on';
	// this.setAttribute('class', 'on');
	var activeTarget = $('#gnb .on'),
		parent = this.parentNode;
	if(activeTarget.nodeType === 1) {
		activeTarget.classList.remove('on');
	}
	parent.classList.add('on');
};
// function gnbD1Blur() {
// 	// this.className = '';
// 	// this.setAttribute('class', '');
// 	this.classList.remove('on');
// };

/**
 * --------------------------------
 * 선증가(감소) vs 후증가(감소)
 * --------------------------------
 */
// --------------------------------/
// 선 감소 사례
// var l = gnb_d1_links.length;

// while(--l >= 0) {
// 	gnb_d1_links[l].onfocus = gnbD1Action;
// }

// --------------------------------/
// 후 감소 사례
// var l = gnb_d1_links.length;

// while(l-- > 0) {
// 	gnb_d1_links[l].onfocus = gnbD1Action;
// }

