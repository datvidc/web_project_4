const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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

      //rules for processing JS and HTML

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
    new MiniCssExtractPlugin()
  ]


}
