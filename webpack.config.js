const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
module.exports = {
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    port: 9000
  },
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        exclude: /node_modules/u,
        test: /\.(?<ext>js|jsx)$/u,
        use: 'babel-loader'
      },
      {
        test: /\.css$/u,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.html$/u,
        use: 'html-loader'
      },
      {
        test: /\.(?<ext>ttf|png|svg|jpg|gif)$/u,
        use: ['file-loader']
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: './index.html',
      template: './src/index.html'
    }),
    new CopyWebpackPlugin([{
      from: 'public'
    }])
  ]
}
