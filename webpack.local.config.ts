import dotenv from "dotenv";
import Dotenv from "dotenv-webpack";
import webpack from "webpack";
import webpackConfig from "./webpack.config";

dotenv.config({ path: ".env.local" });

export default {
  ...webpackConfig,
  mode: "development",
  devServer: {
    static: "./dist",
    hot: true,
    port: Number(process.env.REACT_APP_PORT),
    open: true,
    historyApiFallback: true,
  },
  devtool: "inline-source-map",
  plugins: [
    ...webpackConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: ".env.local",
      safe: false,
      systemvars: true,
    }),
  ],
};
