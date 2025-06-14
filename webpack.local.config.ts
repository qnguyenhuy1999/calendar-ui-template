import webpackConfig from "./webpack.config";
import dotenv from "dotenv";
import Dotenv from "dotenv-webpack";
import * as path from "path";
import webpack from "webpack";

import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

dotenv.config({ path: ".env.local" });

export default {
  ...webpackConfig,
  mode: "development",
  devServer: {
    hot: true,
    open: true,
    port: Number(process.env.REACT_APP_PORT),
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "public"),
    },
  },
  devtool: "eval-source-map",
  module: {
    ...webpackConfig.module,
    rules: [
      ...webpackConfig.module.rules,
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    ...webpackConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new Dotenv({
      path: ".env.local",
      safe: false,
      systemvars: true,
    }),
  ],
};
