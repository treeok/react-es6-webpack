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
        node: {
            fs: 'empty'
        },
        module: {
            preLoaders: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'eslint-loader'
                }
            ],
            loaders: [
                {
                    test: /\.css$/,
                    loaders: ['style', 'css']
                },
                {
                    test: /\.json$/,
                    loader: 'json'
                },
                {
                    test: /\.less$/,
                    loaders: ['style', 'css', 'less']
                },
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: ['jsx', 'babel']
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
                    test: /\.png$/,
                    loader: 'url-loader?limit=10000&mimetype=image/png'
                },
                {
                    test: /\.gif$/,
                    loader: 'url-loader?limit=10000&mimetype=image/gif'
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