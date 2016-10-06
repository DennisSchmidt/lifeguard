var webpack = require('webpack')
var path = require('path')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = [{
  entry: {
    app: [
      `webpack-dev-server/client?http://${process.env.HOST}:${process.env.PORT}`,
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './src/app/index.js'
    ],
    vendor: ["react", "react-dom", "react-router", "moment", "react-apollo", "apollo-client", "graphql-tag", "jquery"]
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
      },{
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
        test: /\.(png|jpg|gif)$/,
        exclude: ["node_modules", "src"],
        loader: 'file?name=images/[path][name].[ext]&context=src'
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: '[name].js'
    })
  ]
},{
  entry: {
    login: "./src/login/index.js"
  },
  output: {
    publicPath: `http://${process.env.HOST}:${process.env.PORT}/assets/`,
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract({
          notExtractLoader: 'style-loader',
          loader: 'css-loader?modules&importLoaders=1&localIdentName=[local]!resolve-url!sass-loader?sourceMap',
        })
      },{
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          notExtractLoader: 'style-loader',
          loader: 'css-loader?modules&importLoaders=1&localIdentName=[local]!less-loader',
        })
      },{
        test: /\.(png|jpg|gif)$/,
        exclude: ["node_modules"],
        loader: 'file?name=images/[path][name].[ext]&context=src'
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
    })
  ]
},{
  entry: {
    graphiql: './src/graphiql'
  },

  output: {
    publicPath: `http://${process.env.HOST}:${process.env.PORT}/assets/`,
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [ /node_modules/ ],
        loaders: [ 'babel-loader' ]
      },{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          notExtractLoader: 'style-loader',
          loader: 'css-loader?modules&importLoaders=1&localIdentName=[local]',
        })
      },{
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract({
          notExtractLoader: 'style-loader',
          loader: 'css-loader?modules&importLoaders=1&localIdentName=[local]!sass-loader',
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    })
  ]
}]
