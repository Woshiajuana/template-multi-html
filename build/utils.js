
const path = require('path');

const nodeDir = require('node-dir');

/**
 * 遍历文件目录
 * @param directory {String}
 * @param recursive {Boolean}
 * @param regExp {RegExp}
 * @return {Array}
 * */
function requireFile (directory = '', recursive, regExp) {
    if (directory[0] === '.') {
        // Relative path
        directory = path.join(__dirname, directory)
    } else if (!path.isAbsolute(directory)) {
        // Module path
        directory = require.resolve(directory)
    }
    return nodeDir
        .files(directory, {
            sync: true,
            recursive: recursive || false
        })
        .filter((file) =>  {
            return file.match(regExp || /\.(json|js)$/)
        });
}

module.exports = {
    requireFile,
};
