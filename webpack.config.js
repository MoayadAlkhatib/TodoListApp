const path = require('path');
const Dotenv = require('dotenv-webpack');
module.exports ={
    entry: {
        reg: './source/model/register.js',
        main: './source/model/main.js',
        dashboard: './source/model/dashboard.js'
    },
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'source/build')
    },
    node: {
        fs: "empty"
     },
     plugins: [
        new Dotenv()
      ]
}