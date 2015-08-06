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
var allTasks = fs.readdirSync(tasksPath).map(function(file) { return file.replace('.js', ''); });
// load custom tasks
allTasks.forEach(function(file) {
    var task = require('./tasks/' + file).bind(this, config);
    if (task.deps) {
        gulp.task(file, task.deps, task.work);
    } else {
        gulp.task(file, task);
    }
});

gulp.task('default', ['debug', 'serve']);
gulp.task('deploy', ['build', 'assets']);