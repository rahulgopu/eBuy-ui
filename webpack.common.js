const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  app: path.resolve(__dirname, "/src/app.js"),
  build: path.resolve(__dirname, "dist"),
  index: path.join(__dirname, "src", "index.html"),
};

module.exports = {
  entry: {
    app: PATHS.app,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: "url-loader",
      },
      {
        test: /\.js?$/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.index,
    }),
  ],
  output: {
    filename: "[name].js",
    path: PATHS.build,
    publicPath: "",
  },
};