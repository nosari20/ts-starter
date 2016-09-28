var gulp = require('gulp');
var gls = require('gulp-live-server');

var server_task = function() {

    var server = gls.static('build', 8888);
    server.start();

    //use gulp.watch to trigger server actions(notify, start or stop) 
    var build_watcher = gulp.watch('build/**/*.*', function (file) {
        server.notify.apply(server, [file]);        
    });
    build_watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', reloading...');
    });
}
gulp.task('live', server_task);
module.exports = server_task;