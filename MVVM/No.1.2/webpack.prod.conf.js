const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
    // devtool: '#source-map',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader', publicPath: '../'}),
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(['dist/*.js', 'dist/css/*']),
        new CleanWebpackPlugin(),
        new ExtractTextPlugin('css/[name].css'), //分离CSS和JS文件
        new htmlWebpackPlugin({
            title: 'webpack San',
            template: path.resolve(__dirname, 'index.html')
        })
    ]
})