/**
 * Created by NCGZ-DZ- on 2015/8/6.
 */
var path = require('path');
var _ = require('lodash');
var _dirname = path.resolve(path.dirname());

module.exports = function(cfg){
    return _.merge(cfg,{
        resolveLoader: {
            root: path.join(_dirname , '..' ,'node_modules')
        },
        resolve: {
            packageMains: ['style', 'main'],
            extensions: ['', '.js', '.jsx'],
            modulesDirectories: ['node_modules']
        },
        module: {
            /*preLoaders: [
                {
                    test: /\.jsx$/,
                    exclude: /node_modules/,
                    loader: 'eslint-loader'
                }
            ],*/
            loaders: [
                {
                    test: /\.(jsx|js)$/,
                    exclude: /node_modules/,
                    loader: 'jsx-loader!babel-loader'
                },
                {
                    test: /\.css$/,
                    loaders: 'style-loader!css-loader'
                },
                {
                    test: /\.less$/,
                    loaders: 'style-loader!css-loader!less-loader!./style/main.less'
                },
                {
                    test: /\.woff\d?(\?.+)?$/,
                    loader: 'url?limit=10000&minetype=application/font-woff'
                },
                {
                    test: /\.ttf(\?.+)?$/,
                    loader: 'url?limit=10000&minetype=application/octet-stream'
                },
                {
                    test: /\.eot(\?.+)?$/,
                    loader: 'file'
                },
                {
                    test: /\.svg(\?.+)?$/,
                    loader: 'url?limit=10000&minetype=image/svg+xml'
                },
                {
                    test: /\.json$/,
                    loader: 'json-loader'
                },
                {
                    test: /\.(png|gif)$/,
                    loader: 'url-loader?limit=10000&mimetype=image/png'
                }
            ]
        }

    },function(a,b){
        if(_.isArray(a)){
            return a.concat(b);
        }
        if(_.isObject(a)){
            return _.merge(b,a);
        }
    });
};