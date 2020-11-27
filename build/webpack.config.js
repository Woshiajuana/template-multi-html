
const { resolve } = require('path');

const merge = require('webpack-merge');

const webpackBaseConfig = require('./webpack.base.config');
const webpackDevConfig = require('./webpack.dev.config');


module.exports = merge(webpackBaseConfig, webpackDevConfig);
