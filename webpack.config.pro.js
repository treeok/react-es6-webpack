/**
 * Created by claire on 2015/7/23.
 */
var path = require('path');

module.exports = {
    context: path.resolve(__dirname),
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),//路径导航
        filename: 'app.min.js'
    },
    resolve: {
        root: path.resolve(__dirname)
    }
};
