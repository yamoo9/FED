var getDirname = require('./getDirname');

// getFilename();
module.exports = function(file_name, identifier) {
	return getDirname( (file_name || __filename), identifier);
};