let Webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

// variaveis de ambiente
let DefinePlugin = new Webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  }
});


let HtmlWebpackPluginConfig = new HtmlWebpackPlugin({ template: 'index.html' });

// minifica o seu código
let UglifyPlugin = new Webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } });

// evita de ter dependecias duplicadas
var DedupePlugin = new Webpack.optimize.DedupePlugin();

// separa codigo da aplicacao com codigo externo
var CommonChunksPlugin = new Webpack.optimize.CommonsChunkPlugin({ name: ['vendor', 'manifest'] });


module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    app: './app.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].bundle.js'
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
  plugins: [DefinePlugin, HtmlWebpackPluginConfig, UglifyPlugin, DedupePlugin, CommonChunksPlugin]
};