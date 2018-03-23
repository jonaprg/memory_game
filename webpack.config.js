var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: [
                /node_modules/,
                path.join(__dirname, '/dist'),
            ]
        }]
    },
    stats: {
        errorDetails: true, //this does show errors
        colors: true,
        modules: true,
        reasons: true
    }
};