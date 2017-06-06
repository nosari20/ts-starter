var gulp = require('./gulp')([
    'build-ts',
    'build-sass',
    'build-html',
    'copy-file',
    'live',
    'build-test',
    'run-test',

    'build-sass-min',
    'build-ts-min',
]);
 
/* Building */
gulp.task('build', ['build-ts', 'build-sass', 'build-html', 'copy-file', 'copy-server']);
gulp.task('build:prod', ['build-ts-min', 'build-sass-min', 'build-html', 'copy-file']);

/*  Watching */
gulp.task('server', ['build'], function(){
    gulp.start('live');
});

gulp.task('watch', function(){
    ts_watcher = gulp.watch('src/**/*.ts', ['build-ts']);
    ts_watcher.on('change', function(event) {
        console.log('File [TypeScript]' + event.path + ' was ' + event.type + ', running tasks...');
    });
    
    html_watcher = gulp.watch('src/**/*.html',['build-html']);
    html_watcher.on('change', function(event) {
        console.log('File [HTML] ' + event.path + ' was ' + event.type + ', running tasks...');
    });

    file_watcher = gulp.watch('src/assets/**/*',['copy-file']);
    file_watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
    sass_watcher = gulp.watch('src/**/*.scss',['build-sass']);
    sass_watcher.on('change', function(event) {
        console.log('File [SCSS] ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});


/* Testing */
gulp.task('test:build', ['build-test']);

gulp.task('test', ['build-test'], function(){
    gulp.start('run-test');
});
