/**
 * Created by claire on 2015/6/3.
 */

var path = require('path');

module.exports = {
    entry: {
        'comments/comment' : './src/components/comments/main',
        'nav/nav': './src/components/nav/main'
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'jsx-loader?harmony'
            }
        ]
    }
};