const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
    // index: './src/index.js',
    // another: './src/another-module.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Code Splitting'
    })
  ],
//   optimization: { // 文档有坑， new webpack.optimize.CommonsChunkPlugin插件已移除，这是新的
//     splitChunks: { 
//         cacheGroups: { 
//             commons: { 
//                 name: "commons", 
//                 chunks: "initial", 
//                 minChunks: 2 
//             } 
//         } 
//     } 
//   },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};