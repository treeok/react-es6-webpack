/**
 * Created by claire on 2015/6/3.
 */
'use strict';

module.exports = {
    //entry: './src/main.js',
    /*output: {
        filename: 'public/bundle.js'
    },*/
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'jsx-loader?harmony'
            }
        ]
    }
};