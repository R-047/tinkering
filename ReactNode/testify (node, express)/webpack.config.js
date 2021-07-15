const path = require('path')
module.exports = {
    entry: './staticFolder/webpackTest.js',
    output: {
        filename: 'webpackTestBuild.js',
        path: path.resolve(__dirname, 'staticFolder', 'dist'),
    },
};