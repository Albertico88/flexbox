var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('style', function() {
  gulp.src('main/style.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'));
});


gulp.task('default', function() {
  gulp.watch('main/style.css', ['style']);
});
