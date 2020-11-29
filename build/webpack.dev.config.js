
const { merge } = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 基础配置
const webpackBaseConfig = require('./webpack.base.config');

module.exports = merge(webpackBaseConfig, {

    // 模式
    mode: 'development',

    // loader 配置
    module: {
        rules: [
            // css 样式
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                    ],
                                ],
                            },
                        },
                    },
                ],
            },
            // sass 样式
            {
                test: /\.s(c|a)ss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                    ],
                                ],
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
        ]
    },

    // 插件
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash:8].css',
        }),
    ],

    //
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 1 * 1,
        }
    }

});
