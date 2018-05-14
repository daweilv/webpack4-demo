const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

const publicPath = "/";
// for cdn

module.exports = {
  entry: {
    home: "./src/entry/home/index.js",
    detail: "./src/entry/detail/index.js"
  },
  output: {
    filename: devMode
      ? "entry/[name]/index.[hash:8].js"
      : "entry/[name]/index.[chunkhash:8].js",
    path: path.resolve(__dirname, "build"),
    publicPath
  },
  plugins: [
    new CleanWebpackPlugin(["build"]),
    new HtmlWebpackPlugin({
      title: "Home Management",
      template: "src/entry/home/index.html",
      filename: "entry/home/index.html",
      chunks: ["home"]
    }),
    new HtmlWebpackPlugin({
      title: "Detail Management",
      template: "src/entry/detail/index.html",
      filename: "entry/detail/index.html",
      chunks: ["detail"]
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
        test: /\.less$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [require("postcss-import"), require("autoprefixer")]
            }
          },
          "less-loader"
        ]
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
