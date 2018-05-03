const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
    devtool: '#eval-source-map',
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 9999,
        hot: true,
        open: true,
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // webpack打包时遇到错误不跳出
        new webpack.NoEmitOnErrorsPlugin(),
        new htmlWebpackPlugin({
            title: 'webpack San',
            template: path.resolve(__dirname, 'index.html')
        })
    ]
})