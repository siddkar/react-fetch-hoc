var path = require('path');
var webpack = require('webpack');
module.exports = {
    context: path.resolve('js'),
    entry: {
        "bundle": './app.js',
        "bundle.min": './app.js',
    },
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/js/',
        filename: '[name].js'
    },
    plugins: [
        /* new webpack.DefinePlugin({
             'process.env': {
                 NODE_ENV: JSON.stringify('production')
             }
         }),*/
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ],
    devServer: {
        contentBase: 'public'
    },
    module: {
        loaders: [
            {
                test: /\.(es6|js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
}