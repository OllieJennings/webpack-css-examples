var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: path.join(process.cwd(), '/bootstrap.js'),
  output: {
    path: './build/',
    filename: '[hash].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: '/node_modules/' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css!postcss') }
    ]
  },
  postcss: function () { return [
    require('postcss-import'),
    require('cssnano')({
      discardComments: { removeAll: true },
      zindex: true,
      discardUnused: true
    }),
    require('postcss-cssnext')
  ]; },
  plugins: [
    new ExtractTextPlugin('[hash].css')
  ],
  colors: true,
  progress: true,
}
