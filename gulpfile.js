var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');

gulp.task('default', function() {
  return gulp.src('client/app/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('client/compiled'));
});

gulp.task('vendor', function() {
  return gulp.src('client/vendor/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('vendor.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('client/compiled'));
});

livereload.start = true;
livereload({
  start: true
})
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('client/app/**/*.js', ['default', 'vendor']);
});