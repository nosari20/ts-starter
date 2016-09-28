var gulp = require('./gulp')([
    'build-ts',
    'build-sass',
    'copy-html',
    'live',
    'build-test',
    'run-test'
]);
 
/* Building */
gulp.task('build', ['build-ts', 'build-sass', 'copy-html']);
gulp.task('build:ts', ['build-ts']);
gulp.task('build:sass', ['build-sass']);
gulp.task('build:html', ['copy-html']);


/*  Watching */
gulp.task('server', ['build'], function(){
    gulp.start('live');
});

gulp.task('watch', function(){
    ts_watcher = gulp.watch('src/**/*.ts', ['build-ts']);
    ts_watcher.on('change', function(event) {
        console.log('File [TypeScript]' + event.path + ' was ' + event.type + ', running tasks...');
    });

    html_watcher = gulp.watch('src/**/*.html',['copy-html']);
    html_watcher.on('change', function(event) {
        console.log('File [HTML] ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});


/* Testing */
gulp.task('test:build', ['build-test']);

gulp.task('test', ['build-test'], function(){
    gulp.start('run-test');
});