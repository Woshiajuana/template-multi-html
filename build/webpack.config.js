
const path = require('path');
const fs = require('fs');

const { traverseDir } = require('./utils');

// const data = traverseDir(path.resolve(__dirname, '../src/views/'));

// console.log('data => ', data);
const data = require.context(path.resolve(__dirname, '../src/views/'), true, /\.js$/);
data.keys().forEach(key => {
    callback && callback(key, data(key));
});

module.exports = {

};
