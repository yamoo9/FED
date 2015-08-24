/*
	Node.js는 서버사이드 플랫폼입니다.
	__dirname, __filename은 클라이언트 사이드 환경에서는 사용할 수 없습니다.
 */

console.log('전역에서 경로 출력:\n', __dirname+'\n', __filename);

/*------------------------------------------------------------------------*/


/*
	파일 경로 구분자는 운영체제마다 다릅니다.
	OSX     : '/'
	Windows : '\\'
 */

(function(){

	var platform      = /darwin/.test(process.platform) ? 'osx' : 'windows',
		identifier    = identifier || platform === 'osx' ? '/' : '\\',
		full_dirname  = __dirname.split(identifier),
		dirname       = full_dirname[full_dirname.length - 1],
		full_filename = __filename.split(identifier),
		filename      = full_filename[full_filename.length - 1];

	console.log('함수 구현 전:\n', dirname + '\n', filename);

})();

/*------------------------------------------------------------------------*/

(function(){

	function platform() {
		return /darwin/.test(process.platform) ? 'osx' : 'windows';
	}

	function isOSX() {
		return platform() === 'osx';
	}

	function isWindows() {
		return platform() === 'widnows';
	}

	function getDirname(dir_name, identifier) {
		dir_name   = dir_name || __dirname;
		identifier = identifier || isOSX() ? '/' : '\\';
		dir_name   = dir_name.split(identifier);
		return dir_name[dir_name.length - 1];
	}

	function getFilename(file_name, identifier) {
		return getDirname( (file_name || __filename), identifier);
	}

	var dirname  = getDirname(),
		filename = getFilename();

	console.log('함수 구현 후:\n', dirname + '\n', filename);

})();

