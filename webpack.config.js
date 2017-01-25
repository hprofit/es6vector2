var path = require('path');
module.exports = {
    entry: './es6/vector2.es6.js',
    output: {
        path: __dirname,
        filename: './dist/vector2.js'
    },
    module: {
        loaders: [
            {
              test: path.join(__dirname, 'es6'),
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                presets: ['es2015']
              }
            }
        ]
    },
    stats: {
        // Nice colored output
        colors: true
    },
    resolve: {
        extensions: [ '', '.js' ]
    }
};
