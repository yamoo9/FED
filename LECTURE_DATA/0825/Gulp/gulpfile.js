var gulp = require('gulp'),
	jade = require('gulp-jade'),
	sass = require('gulp-sass');

/**
 * --------------------------------
 * 환경설정
 * --------------------------------
 */
var config = {
	'jade': { 'pretty': true },
	'sass': { 'outputStyle': 'compact' }
};

/**
 * --------------------------------
 * Gulp 업무
 * --------------------------------
 */
// 기본 업무
gulp.task('default', ['jade', 'sass', 'watch']);

// 관찰 업무
gulp.task('watch', function() {
	gulp.watch(['src/index.jade'], ['jade']);
	gulp.watch(['src/sass/style.scss'], ['sass']);
})

// Jade → HTML
gulp.task('jade', function() {
	gulp.src('src/index.jade')
		.pipe( jade( config.jade ) )
		.pipe( gulp.dest('dist') );
});

// Sass → Css
gulp.task('sass', function() {
	gulp.src('src/sass/style.scss')
		.pipe( sass( config.sass ).on('error', sass.logError) )
		.pipe( gulp.dest('dist/css') );
});