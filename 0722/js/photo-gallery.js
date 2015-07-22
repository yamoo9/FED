var html    = $('html');
var bgGroup = $('#background-group');

window.onload = window.onresize = setHeight;

function setHeight() {
	bgGroup.style.cssText = 'height: ' + html.clientHeight + 'px';
}



/**
 * --------------------------------
 * #background-control a 제어
 * --------------------------------
 */

var bgControl      = $('#background-control'),
	bgControl_btns = $('#background-control a');

bgControl_btns[0].onclick = function() {
	// $('#background-group .bg-area-1').className += ' filter-off';
	$('#background-group .bg-area-1').classList.add('filter-off');
	return false;
}
bgControl_btns[1].onclick = function() {
	// $('#background-group .bg-area-2').className += ' filter-off';
	$('#background-group .bg-area-2').classList.add('filter-off');
	return false;
}
bgControl_btns[2].onclick = function() {
	// $('#background-group .bg-area-3').className += ' filter-off';
	$('#background-group .bg-area-3').classList.add('filter-off');
	return false;
}
bgControl_btns[3].onclick = function() {
	// $('#background-group .bg-area-4').className += ' filter-off';
	$('#background-group .bg-area-4').classList.add('filter-off');
	return false;
}


