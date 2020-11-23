
const path = require('path');

const { requireFile } = require('./utils');

const rootDirectory = path.resolve(__dirname, '../src/views');

const entry = {};

requireFile(
    rootDirectory,
    true,
    /\.js$/,
).forEach((file) => {
    const key = path.join('.', file.slice(rootDirectory.length + 1))
        .split(path.sep)
        .slice()
        .map((item, index) => { return this.length > index + 1 })
        .join('_');
    entry[key] = file;
});

console.log('entry => ', entry);

module.exports = {

};
