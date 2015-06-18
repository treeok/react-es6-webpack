/**
 * Created by claire on 2015/6/3.
 */
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        'comments/comment' : [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './src/components/comments/main'
        ],
        'nav/nav': './src/components/nav/main'
    },
    output: {
        path: path.join(__dirname, "assets"), //打包文件存放的绝对路径
        publicPath: '/assets/', // 网站运行时的访问路径
        filename: "[name].bundle.js" //
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'react-hot!babel-loader'
            },
            {
                test: /\.jsx?$/,
                loader: 'react-hot!babel-loader!jsx-loader?harmony'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
            },
            {   test: /\.(png|jpg)$/,
                loader: "url-loader?limit=8192"
            },
            {
                test: /\.js?$/,
                loaders: ['react-hot', 'babel'],
                include: [path.join(__dirname, 'src')]
            }
        ]
    }/*,
    plugins: [
        new webpack.CommonsChunkPlugin("common.js")
    ]*/
};