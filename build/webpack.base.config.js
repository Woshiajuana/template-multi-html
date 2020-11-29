
const { resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolveFilename = require('art-template/lib/compile/adapter/resolve-filename.js');
const { generateEntry } = require('./utils');

// 生成入口文件
const entry = generateEntry(resolve(__dirname, '../src/views'));

// 生成多入口模板 html 文件 插件
const arrHtmlWebpackPlugin = ((entry) => {
    let result = [];
    for (let key in entry) {
        const htmlWebpackPlugin = new HtmlWebpackPlugin({
            filename: `${key}.html`,
            template: entry[key].replace('index.js', 'index.html'),
            minify: {
                removeAttributeQuotes: false, // 移除属性的引号
                removeComments: false, // 移除注释
                collapseWhitespace: false, // 折叠空白区域
            },
            chunks: [key],
            inject: true,
        });
        result.push(htmlWebpackPlugin);
    }
    return result;
})(entry);

module.exports = {

    // 入口文件
    entry,

    // 出口文件
    output: {
        filename: 'assets/js/[name].[hash:10].js',
        path: resolve(__dirname, '../dist'),
    },

    // 替换路径配置
    resolve: {
        alias: {
            'src': resolve(__dirname, '../src/'),
        }
    },

    // loader 配置
    module: {
        rules: [
            // js
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/,
                    // /flexible.js/,
                ],
                loader: 'babel-loader',
            },
            // html
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: resolve(__dirname, 'art-template-loader'),
                options: {
                    resolveFilename (path, context) {
                        console.log('path ===> ', path);
                        /^src/.test(path) && (path = path.replace(/^src/, resolve(__dirname, '../src')));
                        return resolveFilename(path, context);
                    },
                    exclude: [
                        /flexible.js$/,
                    ],
                    htmlResourceRules: [/\bsrc="([^"]*)"/]
                }
            },
            // 图片
            {
                test: /\.(png|jpe?g|gif)$/,
                exclude: /node_modules/,
                loader: 'url-loader',
                options: {
                    limit: 4 * 1024,
                    esModule: false,
                    name: '[name][hash:10].[ext]',
                    outputPath: 'assets/images',
                },
            },
            // 其他文件
            {
                exclude: /\.(css|scss|sass|js|html|png|jpe?g|gif)/,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash:4].[ext]',
                    outputPath: 'assets/media',
                },
            },
        ]
    },

    // 插件
    plugins: [
        ...arrHtmlWebpackPlugin,
    ],

};
