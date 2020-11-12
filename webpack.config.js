
const path = require('path');


module.exports = {
    
    context: __dirname,
    entry: './frontend/entry.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/env', '@babel/react']
                }
                // query: { presets: ['es2015'] },
            },
        },
            // {
            //     test: /\.(png|svg|jpe?g|gif)$/,
            //     include: /images/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[name].[ext]',
            //                 outputPath: 'images/',
            //                 publicPath: 'images/'
            //             }
            //         }
            //     ]
            // },
        {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        sourceMap: true
                    }
                },
                // Compiles Sass to CSS
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    }
                }
            ],
        }
    ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    },
    target: 'node',
    // node: {
    //     fs: "empty"
    // },
    externals: {
        // fs: "commonjs fs",
        // path: "commonjs path",
        fsevents: "require('fsevents')"
    }
};