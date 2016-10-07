var webpack = require('webpack')
var path = require('path')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var ManifestPlugin = require('webpack-manifest-plugin')

var browserslist = require('./browserslist')

var sharedManifest = {}

module.exports = [{
  entry: {
    app: "./src/app/index.js",
    vendor: ["react", "react-dom", "react-router", "moment", "react-apollo", "apollo-client", "graphql-tag", "jquery"]
  },

  output: {
    filename: "[name]-[hash].min.js",
    publicPath: "/assets/",
    path: "build"
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
          loader: 'css-loader!sass-loader',
        })
      },{
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          notExtractLoader: 'style-loader',
          loader: 'css-loader!less-loader',
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
      filename: '[name]-[hash].min.css',
      allChunks: true
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [ autoprefixer({ browsers: browserslist }) ]
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new ManifestPlugin({
      fileName: ".manifest.json",
      cache: sharedManifest
    }),
    new webpack.EnvironmentPlugin([
      "NODE_ENV"
    ]),
    new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(de)$/),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: '[name]-[hash].js'
    })
  ]
},{
  entry: {
    login: "./src/login/index.js"
  },
  output: {
    filename: "[name]-[hash].min.js",
    publicPath: "/assets/",
    path: "build"
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract({
          notExtractLoader: 'style-loader',
          loader: 'css-loader!sass-loader',
        })
      },{
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          notExtractLoader: 'style-loader',
          loader: 'css-loader!less-loader',
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
      filename: '[name]-[hash].min.css',
      allChunks: true
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [ autoprefixer({ browsers: browserslist }) ]
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new webpack.EnvironmentPlugin([
      "NODE_ENV"
    ]),
    new ManifestPlugin({
      fileName: ".manifest.json",
      cache: sharedManifest
    }),
  ]
},{
  entry: {
    graphiql: './src/graphiql'
  },

  output: {
    filename: "[name]-[hash].min.js",
    publicPath: "/assets/",
    path: "build"
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
          loader: 'css-loader',
        })
      },{
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract({
          notExtractLoader: 'style-loader',
          loader: 'css-loader!sass-loader',
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name]-[hash].min.css',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new webpack.EnvironmentPlugin([
      "NODE_ENV"
    ]),
    new ManifestPlugin({
      fileName: ".manifest.json",
      cache: sharedManifest
    }),
  ]
}]
