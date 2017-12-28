const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')

const { DefinePlugin } = webpack

module.exports = {
  entry: './src/app.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlPlugin({
      template: path.join(__dirname, './src/index.html'),
      hash: true,
      inject: 'body',
      filename: 'index.html'
    })
  ],
  devtool: 'eval-source-map'
}
