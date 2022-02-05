const { resolve } = require("path");
const path = require('path');
const webpack = require("webpack");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },

  devtool: "inline-source-map",

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },

  module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ]
        }
      }
    },
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
  ]
}
};
