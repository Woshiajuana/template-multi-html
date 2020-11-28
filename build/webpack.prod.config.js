
const { merge } = require('webpack-merge');


const webpackBaseConfig = require('./webpack.base.config');
const webpackDevConfig = require('./webpack.dev.config');

module.exports = merge(webpackDevConfig, {

    // 模式
    mode: 'production',


});
