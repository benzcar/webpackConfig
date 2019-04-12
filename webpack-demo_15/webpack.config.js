const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: [
      'lodash'
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Caching'
    }),
    new webpack.HashedModuleIdsPlugin()
  ],
  optimization: { // 文档有坑， new webpack.optimize.CommonsChunkPlugin插件已移除，这是新的
    splitChunks: { 
        cacheGroups: { 
            commons: { 
                name: "vendor", 
                chunks: "initial", 
                minChunks: 2 
            } 
        } 
    } 
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  }
};