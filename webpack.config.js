const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        hello: './src/script/hello.js',
        world: './src/script/world.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index-[hash].html',
            inject: 'head',
            title:'hello world'
        })
    ]
};