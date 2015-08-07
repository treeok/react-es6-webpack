/**
 * Created by Claire on 2015/7/23.
 */
var gulp = require('gulp');
var path = require('path');
var fs = require('fs');
var config = require('./config.js');
var defaultConfig = require('./webpack.defaults.js');


if (config.webpackConfig) {
    if (config.webpackConfig.debug) {
        config.webpackConfig.debug = defaultConfig(config.webpackConfig.debug);
    }
    if (config.webpackConfig.production) {
        config.webpackConfig.production = defaultConfig(config.webpackConfig.production);
    }
}
var tasksPath = path.join(__dirname, 'tasks');
var tasks = fs.readdirSync(tasksPath).map(function(file) { return file.replace('.js', ''); });

tasks.forEach(function(file) {
    var task = require(tasksPath+'/' + file).bind(this, config);
    if (task.deps) {
        gulp.task(file, task.deps, task.work);
    } else {
        gulp.task(file, task);
    }
});

/*gulp.task('debug',function(){
    var task = require('./tasks/debug.js').bind(this, config);
    gulp.task('debug', task);
});
gulp.task('serve',function(){
    var task = require('./tasks/serve.js').bind(this, config);
    gulp.task('serve', task);
});*/

gulp.task('default', ['debug', 'serve']);
gulp.task('deploy', ['build', 'assets']);