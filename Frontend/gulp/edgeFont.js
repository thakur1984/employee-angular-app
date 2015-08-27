
var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});
 gulp.task('edgeFont', function () {
						return gulp.src(['./node_modules/edge-core/fonts/**/*.{eot,svg,ttf,woff,woff2}','./bower_components/bootstrap/fonts/**/*.{eot,svg,ttf,woff,woff2}'])
								.pipe($.flatten())
								.pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/fonts/')));
					}); 