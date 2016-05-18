var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: path.join(process.cwd(), '/bootstrap.js'),
  output: {
    path: './build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: '/node_modules/' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss') }
    ]
  },
  postcss: function () { return [
    require('postcss-import'),
    require('cssnano')({
      discardComments: { removeAll: true },
      zindex: false,
      discardUnused: true
    }),
    require('postcss-cssnext'),
  ]; },
  plugins: [
    new CleanWebpackPlugin(['build/*.css', 'build/*.css.map', 'build/*.js', 'build/*.js.map'], {
      root: process.cwd(),
      verbose: true,
      dry: false
    }),
    new ExtractTextPlugin('bundle.css'),

  ],
  colors: true,
  progress: true,
  inline: true,
  devtool: 'source-map',
  historyApiFallback: true,
  contentBase: './build'
}
