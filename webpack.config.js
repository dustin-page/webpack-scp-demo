const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const config = require('config');

/*-------------------------------------------------*/

module.exports = {
    // webpack optimization mode
    mode: ( process.env.NODE_ENV ? process.env.NODE_ENV : 'development' ),

    // entry file(s)
    entry: './src/index.js',

    // output file(s) and chunks
    output: {
        path: path.resolve(__dirname, 'dist'),
        /* [name] will be replaced by name value of cacheGroup */
        //chunkFilename: '[name].js',
        filename: 'main.js',
        publicPath: '/'
    },

    // optimization
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,

                // vendor chunk
                vendor: {
                    /* 
                    By default, SplitChunksPlugin prepends key of the chunk to the name of build file. 
                    We can avoid that by using name key and specify different name.
                    */
                    // name of the chunk
                    name: 'vendor',
                    // sync + async chunks
                    chunks: 'all',
                    // import file path containing node_modules
                    test: /node_modules/
                }
            }
        }
    },

    // module/loaders configuration
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        })
    ],

    // development server configuration
    devServer: {
        
        // must be `true` for SPAs
        historyApiFallback: true,

        // open browser on server start
        open: config.get('open'),

        port:8090
    },

    // generate source map
    devtool: ( 'production' === process.env.NODE_ENV ? 'source-map' : 'cheap-module-eval-source-map' ),
};
