/**
 * Created by NCGZ-DZ- on 2015/7/23.
 */
var path = require('path');

module.exports = {
    path: path.resolve(__dirname),
    rootPath: path.resolve(__dirname),
    webpackConfig: {
        debug: require('./webpack.config.js'),
        production: require('./webpack.config.pro.js')
    },
    serverOverrides: function(app, express) {
        app.use('/dist/', express.static(path.join(__dirname, 'dist')));
        app.get('/api/', function(req, res) {
            res.send('OK');
        });
    }
};