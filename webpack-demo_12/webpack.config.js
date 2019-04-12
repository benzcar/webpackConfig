var path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    polyfills: './src/polyfills.js',
    index: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: require.resolve('./src/index.js'),
        use: 'imports-loader?this=>window'
      },
      {
        test: require.resolve('./src/globals.js'),
        use: 'exports-loader?file,parse=helpers.parse'
      }
    ]
  },
  plugins: [ // 插件 如果你遇到了至少一处用到 lodash 变量的模块实例，那请你将 lodash package 包引入进来，并将其提供给需要用到它的模块。
    new webpack.ProvidePlugin({
      _: 'lodash',
      join: ['lodash', 'join']
    })
  ]
};