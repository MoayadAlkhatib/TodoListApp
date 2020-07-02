const path = require('path');
const Dotenv = require('dotenv-webpack');
module.exports ={
    entry: './source/model/register.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'source/build')
    },
    node: {
        fs: "empty"
     },
     plugins: [
        new Dotenv()
      ]
}