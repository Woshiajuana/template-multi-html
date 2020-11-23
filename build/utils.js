
const path = require('path');
const fs = require('fs');

/**
 * 变量目录
 * @param dir [String]
 * @param options [Object]
 * */
function traverseDir (dir = '', options = {}) {
    console.log('dir => ', dir);
    // let { include, exclude } = Object.assign({}, options);
    // let loop =
    // fs.readdir(dir, (err, files) => {
    //     console.log('files => ', files);
    // });

    const data = require.context(dir, true, /\.js$/);
    data.keys().forEach(key => {
        callback && callback(key, data(key));
    });
}

module.exports = {
    traverseDir,
};
