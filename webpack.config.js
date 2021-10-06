const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const buildPath = './build';

module.exports = {
    mode: 'development',
    target: 'web',
    devtool: 'source-map',
    entry: ['./index.js'],
    output: {
        path: path.resolve(__dirname, buildPath),
        filename: '[name].[fullhash].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: path.resolve(__dirname, './node_modules/')
        }, {
            test: /\.(jpe?g|png|gif|svg|tga|glb|babylon|mtl|pcb|pcd|prwm|obj|mat|mp3|ogg)$/i,
            use: 'file-loader',
            exclude: path.resolve(__dirname, './node_modules/')
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({ 'title': 'Pong in ThreeJS' })
    ]
};