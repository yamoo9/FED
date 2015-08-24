var isOSX = require('./checkPlatform').isOSX;

// getDirname();
module.exports = function(dir_name, identifier) {
	dir_name   = dir_name || __dirname;
	identifier = identifier || isOSX() ? '/' : '\\';
	dir_name   = dir_name.split(identifier);
	return dir_name[dir_name.length - 1];
};