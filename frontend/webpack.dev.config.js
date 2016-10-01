var webpack = require('webpack')
var path = require('path')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var limitlessDir = path.resolve(__dirname, './vendor/limitless')
var imagesDir = path.resolve(__dirname, './src/login/images')

module.exports = {
  entry: {
    login: "./src/login/index.js",
    app: [
      `webpack-dev-server/client?http://${process.env.HOST}:${process.env.PORT}`,
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './src/app/index.js'
    ],
    graphiql: './src/graphiql'
  },

  output: {
    publicPath: `http://${process.env.HOST}:${process.env.PORT}/assets/`,
    filename: "[name].js"
  },

  devtool: 'cheap-module-inline-source-map',
  devServer: {
    stats: 'errors-only'
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [ /node_modules/ ],
        loaders: [ 'babel-loader' ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          notExtractLoader: 'style-loader',
          loader: 'css-loader?modules&importLoaders=1&localIdentName=[local]',
        })
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract({
          notExtractLoader: 'style-loader',
          loader: 'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[local]!resolve-url!sass-loader?sourceMap',
        })
      },{
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          notExtractLoader: 'style-loader',
          loader: 'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[local]!less-loader?sourceMap',
        })
      },{
        test: /\.(png|jpg)$/,
        exclude: ["node_modules", "src"],
        loader: 'file?name=[path][name].[ext]&context=' + limitlessDir
      },{
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },{
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },{
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },{
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      },{
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /images/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
