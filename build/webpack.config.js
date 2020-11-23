
const path = require('path');

const { requireFile } = require('./utils');

const rootDirectory = path.resolve(__dirname, '../src/views');

const entry = {};

requireFile(
    rootDirectory,
    true,
    /\.js$/,
).forEach((file) => {
    const keyArr = path.join('.', file.slice(rootDirectory.length + 1))
        .split(path.sep);
    const key = keyArr
        .slice(0, keyArr.length - 1)
        .join('_');
    entry[key] = file;
});

module.exports = {

    // 入口文件
    entry,

    // 出口文件
    output: {
        filename: 'assets/js/[name].[hash].js',
        // filename: 'assets/js/[name].js',
        path: path.resolve(__dirname, '../dist'),
    },

    // loader 配置
    module: {
        rules: [
            // css 样式
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            // sass 样式
            {
                test: /\.s(c|a)ss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            // js
            {
                test: /\./,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            // 图片
            {
                test: /\.(png|jpe?g|gif)$/,
                exclude: /node_modules/,
                loader: 'url-loader',
                options: {
                    limit: 4 * 1024,
                    filename: '[name][hash:4].[ext]',
                    outputPath: '',
                },
            },
            // 其他文件
            {
                
            },
        ]
    },

    mode: 'development',
};
