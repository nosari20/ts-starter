var gulp = require('gulp'); 
var source = require('vinyl-source-stream');  

var copy_html = function(file){
    
    return gulp.src('src/**/*.html')
          .pipe(gulp.dest('./build'));
}

gulp.task('copy-html', copy_html);
module.exports = copy_html;