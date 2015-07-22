var html    = $('html');
var bgGroup = $('#background-group');

window.onload = window.onresize = setHeight;

function setHeight() {
	bgGroup.style.cssText = 'height: ' + html.clientHeight + 'px';
}

