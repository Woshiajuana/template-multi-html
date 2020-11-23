
const path = require('path');
const fs = require('fs');

const { traverseDir } = require('./utils');

const data = traverseDir(path.resolve(__dirname, '../src/views/'));

console.log('data => ', data);

module.exports = {

};
