const Path = require('path')
const config = require('./config/config')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ROOT_PATH = Path.resolve(__dirname)
const ENTRY_PATH = Path.resolve(ROOT_PATH, 'app')
const OUTPUT_PATH = Path.resolve(ROOT_PATH, 'build')

module.exports = {
    entry: {
        index: [
            Path.resolve(ENTRY_PATH, 'index.js')
        ]
    },
    output: {
        path: OUTPUT_PATH,
        filename: "[name]-[contentHash:9].js"
    },
    mode: process.env.NODE_ENV,
    plugins: [
        new htmlWebpackPlugin({
            template: "./app/template/index.html",
            title: config.webSiteTitle,
            showErrors: true
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]-[local]-[hash:base64:5]',
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: ['style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: ["style-loader", 'css-loader', "postcss-loader", "less-loader"]
            },
            {
                test: /\.(png|jpg|gif|JPG|GIF|PNG|BMP|bmp|JPEG|jpeg)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(eot|woff|ttf|woff2|svg)$/,
                use: 'url-loader'
            }
        ]
    }

}

