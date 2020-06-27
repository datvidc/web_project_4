const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/scripts/index.js"
  },
  output: {
    //  below takes current directory and makes it the root of the project.
    path: path.resolve(__dirname, 'public'),
    filename: "main.js",
  },
  module: {
    rules: [
      //beggining of loaders
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      //rules for processing JS

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
      },
      {
        test: /\.(png|svg|jpg|gif|woff2|woff)$/,
        loader: "file-loader",
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new MiniCssExtractPlugin()
  ]


}
