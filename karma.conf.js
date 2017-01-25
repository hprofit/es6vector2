var path = require('path');
var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};//'./tests/vector2.spec.es6.js';
// webpackConfig.output = {
//     path: __dirname,
//     filename: './tests/vector2.spec.es5.js'
// };

module.exports = function (config) {
    'use strict';
    config.set({
        autoWatch: false,
        basePath: '',
        captureTimeout: 60000,
        frameworks: ['jasmine', 'browserify'],
        files: [
            // 'es6/**/*.es6.js',
            './dist/vector2.js',
            './tests/vector2.spec.es6.js'
        ],
        preprocessors: {
            './dist/vector2.js': ['babel'],
            './tests/vector2.spec.es6.js': ['babel']
        },
        babelPreprocessor: {
          options: {
            presets: ['es2015'],
            sourceMaps: 'map',
            plugins: ["transform-es2015-modules-umd"]
          },
          filename: function (file) {
            return file.originalPath.replace(/\.es6\.js$/, '.es5.js');
          },
          sourceFileName: function (file) {
            return file.originalPath;
          }
        },
        // babelPreprocessor: {
        //     options: {
        //         "presets": ["es2015"],
        //         "plugins": ["transform-es2015-modules-umd"]
        //     }
        // },
        reporters: [
            // 'coverage',
            'progress'
        ],
        debug: {
            options: {
                open: true //open node-inspector in Chrome automatically
            }
        },
        // coverageReporter: {
        //     dir: 'coverage-reports/karma_html',
        //     reporters: [
        //         {
        //             type: 'html'
        //         },
        //         {
        //             type: 'text'
        //         }
        //     ]
        // },
        port: 8085,
        browsers: [
            'PhantomJS'
        ],
        webpack: webpackConfig,
        webpackMiddleware: {
          // possible values: "none" || "errors-only" || "minimal" || "normal" || "verbose"
          stats: 'errors-only',
          colors: true
          // noInfo: true
        },
        singleRun: true,
        colors: true,
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,
        errorDetails: true
    });
};
