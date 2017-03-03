/**
 * @author rubyisapm
 */
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        index:'./index.js'
    },
    output: {
        path: path.resolve(__dirname, './lib/mixins'),
        filename: 'validator.js',
        libraryTarget: 'commonjs-module'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        modules:[path.resolve(__dirname, 'src/js/component'),path.resolve(__dirname, 'src/js/module'),'node_modules'],
        extensions: ['.js', '.json','.vue','.css'],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    externals:[
      function(context, request, callback) {
        if (/^ct-utility$/.test(request)){
          return callback(null, 'commonjs ' + request);
        }
        callback();
      }
    ]
};