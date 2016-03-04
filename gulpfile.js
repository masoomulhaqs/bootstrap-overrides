var gulp = require('gulp');

// Include plugins
var minifycss = require('gulp-clean-css');
var rename = require('gulp-rename');
var compass = require('gulp-compass');

gulp.task('compass', function(){
	return gulp.src('./scss/bootstrap-overrides.scss')
			.pipe(compass({
				css: 'css',
				sass: 'scss',
				image: 'images',
				require: 'breakpoint',
				output_style: 'expanded'
			}))
			.pipe(gulp.dest("./css"))
			.pipe(rename({suffix: '.min'}))
			.pipe(minifycss())
			.pipe(gulp.dest("./css"));
});

gulp.task("watch", function(){
	gulp.watch('./scss/bootstrap-overrides.scss', ["compass"]);
});

gulp.task('default', ['watch']);