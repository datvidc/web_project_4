const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/scripts/js.js"
  },
  output: {
    //  below takes current directory and makes it the root of the project.
    path: path.resolve(__dirname, 'public'),
    filename: "main.js",
  },
  module: {
    rules: [
      //rules for processing JS
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|gif|woff2|woff)$/,
        loader: "file-loader"
      },
      {
        test: /\.css$/,
        loader: [MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },

          "postcss-loader"

        ]
      }

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin()
  ]


}
