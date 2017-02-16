var webpack = require('webpack');

module.exports = {

    devtool: 'cheap-module-eval-source-map',

    entry: {
        'polyfills': './src/polyfills',
        'vendor': './src/vendor',
        'app': './src/main'
    },

    output: {
        path: './dist',
        publicPath: 'http://localhost:8080/dist/',
        filename: '[name].js',
        chunkFilename: 'chunk[id].js'
    },

    resolve: {
        extensions: ['','.js', '.ts']
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        })
    ],

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular2-router-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    }

};