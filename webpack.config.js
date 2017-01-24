var path = require('path');
var webpack = require('webpack');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

console.log('Node Modules: '+ JSON.stringify(nodeModules));

module.exports = {
    target: 'web', // default is web
    entry: {
        hoyaview: './src/ts/index.ts'
    },
    devtool: 'sourcemaps',
    cache: true, // build 성능 향상
    debug: true, // Switch loaders to debug mode
    output: {
        path: __dirname,
        filename: './dist/js/[name].js' // Output for the multiple entry
    },
    externals: nodeModules, // Prevent bundling of certain imported packages and instead retrieve these external packages at runtime.
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension. 
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.ts', '.tsx']
    },
    module: { // An array of extensions that should be used to resolve modules.
        loaders: [{
            // test: A condition that must be met <-> exclude
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'ts-loader'
        },
        {
            test: /\.css$/, 
            loader: "style-loader!css-loader"
        },
        {
            test: /\.scss$/,
            loader: "style-loader!css-loader!sass-loader"
        },
        ]
    },
    ts: { // set compiler which is used by ts-loader
        compiler: 'typescript'
    }
};