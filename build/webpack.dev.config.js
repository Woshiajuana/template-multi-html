
const { resolve } = require('path');

module.exports = {

    // 模式
    mode: 'development',

    // devServer
    // 自动编译，自动打开浏览器，字段刷新浏览器
    // 特点：只会在内存中编译打包，不会有任何输出
    // 启动 devServer 指令为：webpack-dev-server
    devServer: {
        // 运行的目录
        contentBase: path.resolve(__dirname, 'dist'),
        // 启动 gzip 压缩
        compress: true,
        // 服务端口
        port: 3000,
        // 自动打开浏览器
        open: true,
        // 开启 hot
        hot: true,
    },

};
