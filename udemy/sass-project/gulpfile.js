var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'
        /*function(f) {
            console.log(f.);
            return f.base;
        }*/));
});

gulp.task('default', ['sass'], function(){
    gulp.watch('./scss/*.scss', ['sass']);
});