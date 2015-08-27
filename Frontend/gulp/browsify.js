var browserify = require('browserify'),
	watchify = require('watchify'),
	gulp = require('gulp'),
	es6ify = require('es6ify'),
	source = require('vinyl-source-stream'),
	sourceFile = './src/app/main/main.module.js',
	destFolder = './.tmp/serve/app/',
	destFile = 'main.js';

gulp.task('browserify', function () {
	return browserify([es6ify.runtime, sourceFile], {
			debug: true,
			insertGlobals: true
		})
		.transform(es6ify)
		.bundle()
		.pipe(source(destFile))
		.pipe(gulp.dest(destFolder));
});