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
	gnb_d1_links[k].onfocus = gnbD1Action;
	k++;
}

function gnbD1Action() {
	console.log(this.textContent);
};
