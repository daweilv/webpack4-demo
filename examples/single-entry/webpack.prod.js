const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [require("postcss-import"), require("autoprefixer")]
            }
          },
          "less-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css"
    }),
    new webpack.optimize.SplitChunksPlugin(),
    new UglifyJSPlugin({
      parallel: true
    })
  ]
});
