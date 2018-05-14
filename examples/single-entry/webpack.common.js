const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

const publicPath = "";
// for cdn

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "[name].[chunkhash:8].js",
    path: path.resolve(__dirname, "build"),
    publicPath
  },
  plugins: [
    new CleanWebpackPlugin(["build"]),
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: "src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        loader: "url-loader",
        options: {
          limit: 8192,
          name: "asset/image/[name].[hash:8].[ext]",
          publicPath
        }
      },
      {
        test: /\.(woff|woff2|eot|otf|webp|ttf)$/i,
        loader: "file-loader",
        options: {
          name: "asset/font/[name].[hash:8].[ext]",
          publicPath
        }
      }
    ]
  }
};
