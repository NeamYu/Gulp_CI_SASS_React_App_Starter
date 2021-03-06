var path = require('path');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/assets/scripts/app.jsx'
    ],
    output: {
        filename: 'caculate.center.min.js'
    },
    resolve: {
        modules: [
            path.resolve('./src/assets/scripts'),
            'node_modules'
        ],
        extensions: [
            '.js',
            '.jsx'
        ]
    },
    externals: {
        params: 'window._params'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            cacheDirectory: true,
                            plugins: [
                                'transform-class-properties',
                                'transform-async-to-module-method',
                                'transform-async-generator-functions'
                            ],
                            presets: [
                                
                                    'es2017',
                                    'es2016',
                                    'es2015',
                                    'react'
                            ]
                            
                        }
                    }
                ]
            }
        ]
    }
}
