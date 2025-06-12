import Dotenv from "dotenv-webpack";
import webpackConfig from "./webpack.config";

export default {
  ...webpackConfig,
  mode: "production",
  plugins: [
    ...webpackConfig.plugins,
    new Dotenv({
      path: ".env.production.local",
      safe: false,
      systemvars: true,
    }),
  ],
};
