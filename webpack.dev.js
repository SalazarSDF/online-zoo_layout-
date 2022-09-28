const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Set the mode to development or production
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "online-zoo/js/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js", // name == index, because of entry: key = index
    clean: true, // можно убрать rm -r dist ?? (nelzya)
    assetModuleFilename: "[name][ext]", // это чтобы картинки сохраняли исходное название в dist
  },

  // Control how source maps are generated
  // добавляет .map файл, который показывает в каком файле и на какой строке ошибка
  devtool: "source-map",

  // Spin up a server for quick development
  devServer: {
    compress: true,
    hot: true,
    port: 8080,

    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    devMiddleware: {
      writeToDisk: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "online-zoo/pages/index.html", // помогает найти html
    }),
    new HtmlWebpackPlugin({
      filename: "donate.html",
      template: "online-zoo/pages/donate.html", // помогает найти html
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
