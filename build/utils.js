
const path = require('path');
const fs = require('fs');

/**
 * 变量目录
 * @param dir [String]
 * @param options [Object]
 * */
function traverseDir (dir = '', options = {}) {
    console.log('dir => ', dir);
    let { include, exclude } = Object.assign({}, options);
    fs.readdir(dir, (err, files) => {
        console.log('files => ', files);
    });
}


module.exports = {
    traverseDir,
};
