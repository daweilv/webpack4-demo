const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        commons: {
          name: "commons",
          minSize: 1, // for demo usage only
          chunks: "initial",
          priority: 2,
          minChunks: 2
        },
        vendors: {
          name: "vendors",
          test: /node_modules/,
          chunks: "initial",
          priority: 10,
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "entry/[name]/index.[contenthash:8].css"
    }),
    new UglifyJSPlugin({
      cache: true,
      parallel: true
    }),
    new OptimizeCSSAssetsPlugin()
    // new BundleAnalyzerPlugin({ analyzerMode: "static" })
  ]
});
