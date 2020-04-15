let Webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');


// variaveis de ambiente
let DefinePlugin = new Webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('development'),
  }
});

let HtmlWebpackPluginConfig = new HtmlWebpackPlugin({ template: 'index.html' });

module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  plugins: [DefinePlugin, HtmlWebpackPluginConfig]
};