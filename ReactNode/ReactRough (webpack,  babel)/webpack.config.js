const path = require('path');
const htmlwpPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
      index: "./src/App.jsx",
      about: "./src/About.jsx"
    },
    output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
  rules: [
    {
      test: /\.(js|jsx)/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }
  ]
},
plugins: [ new htmlwpPlugin({template: __dirname + '/public/index.html',
  filename: 'index.html',
  inject: 'body',
  chunks: ['index']}),
  new htmlwpPlugin({template: __dirname + '/public/about.html',
  filename: 'about.html',
  inject: 'body',
  chunks: ['about']})
]
}
