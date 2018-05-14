const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          "style-loader",
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
  devServer: {
    contentBase: path.join(__dirname, "build"),
    hot: true
    // compress: true,
    // historyApiFallback: {
    //     disableDotRule: true,
    //     rewrites: rewrites,
    // },
    // port: 5000,
    // disableHostCheck: true,
    // host: '0.0.0.0',
    // useLocalIp: true,
    // proxy: {
    //     '/api': {
    //         target: Config.API_Host_URL,
    //         secure: false,
    //         changeOrigin: true,
    //     },
    // },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});
