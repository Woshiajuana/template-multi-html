
const { resolve } = require('path');

const { merge } = require('webpack-merge');

// 基础配置
const webpackBaseConfig = require('./webpack.base.config');
// 开发配置
const webpackDevConfig = require('./webpack.dev.config');
// 生产配置
const webpackProdConfig = require('./webpack.dev.config');

let webpackConfig = webpackBaseConfig;

if (process.env.NODE_ENV === 'development') {
    webpackConfig = merge(webpackBaseConfig, webpackDevConfig);
} else if (process.env.NODE_ENV === 'production') {
    webpackConfig = merge(webpackBaseConfig, webpackProdConfig);
}

module.exports = webpackConfig;
