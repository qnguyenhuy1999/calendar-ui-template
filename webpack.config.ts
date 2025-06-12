import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";

export default {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@data": path.resolve(__dirname, "src/data"),
      "@enums": path.resolve(__dirname, "src/enums"),
      "@functions": path.resolve(__dirname, "src/functions"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@plugins": path.resolve(__dirname, "src/plugins"),
      "@types": path.resolve(__dirname, "src/types"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: ".",
          globOptions: { ignore: ["**/index.html"] },
        },
      ],
    }),
  ],
};
