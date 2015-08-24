// 비공개 멤버
function platform() {
	return /darwin/.test(process.platform) ? 'osx' : 'windows';
}

// 공개 멤버
function isOSX() {
	return platform() === 'osx';
}

function isWindows() {
	return platform() === 'widnows';
}

// 모듈 배포
// 서로 분리된 JS 파일에서 해당 모듈을 가져와 사용할 수 있습니다.
module.exports = {
	'isOSX'     : isOSX,
	'isWindows' : isWindows,
};