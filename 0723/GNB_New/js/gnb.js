/**
 * --------------------------------
 * GNB 위젯 대상 설정
 * --------------------------------
 */
var gnb           = $('#gnb'),
	gnb_lv1_ul    = $('#gnb .lv-1'),
	gnb_lv1_lis   = $('#gnb .lv-1 > li'),
	gnb_lv1_links = $('#gnb .lv-1 > li > a');

/**
 * --------------------------------
 * 이벤트 연결
 * --------------------------------
 */
var gnb_lv1_lis_len = gnb_lv1_lis.length;

while( gnb_lv1_lis_len-- ) {
	gnb_lv1_lis[gnb_lv1_lis_len].onfocus = expandMenu;
	gnb_lv1_lis[gnb_lv1_lis_len].onblue = collapseMenu;
}


/**
 * --------------------------------
 * GNB 위젯에서 처리할 일(함수)
 * --------------------------------
 */
function expandMenu () {
	console.log('펼침');
}

function collapseMenu () {
	console.log('접힘');
}