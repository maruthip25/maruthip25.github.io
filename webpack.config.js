var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './app/index.js', //input file or modules combiner
  output: {
    path: __dirname + "/build/", //incase you have some 'dest' or something
    filename: 'bundle.js'
  }, // output for webpack
  module: {
    loaders: [
      {
        test: /\.jsx?$/, //if .jsx files
        loader: 'babel-loader', //then use babel-loader
        exclude: /node_modules/, //exclude node modules folder
        query: {
          presets: ['react', 'latest'] //user babel-preset-react
        }
      },
      {
        test: /\.css$/,
        //loaders: ['style-loader', 'css-loader'] //if you need style tag injection. Note it says "loader(S)".
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: {
            loader: "css-loader",
            options: { minimize: true }
          }
        })
	    },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 30000
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new ExtractTextPlugin({filename: 'main.css', allChunks: true })
  ]
};
