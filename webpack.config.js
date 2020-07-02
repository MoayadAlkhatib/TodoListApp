const path = require('path')
module.exports ={
    entry: './source/model/register.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'source/build')
    }
}