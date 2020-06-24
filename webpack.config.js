const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
module.export = {
  entry: {
    main: "./src/scripts/index.js"
  },
  output: {
    //  below takes current directory and makes it the root of the project.
    path: path.resolve(__dirname, 'public'),
    filename: "main.js",
  }
  module: {
    rules: [{
      test: /\.css$/,
      loaders: [{
          loader: "css-loader",
          options: {
            importloaders: 1
          }
        }

        "postcss-loader"

      ]
    }]
  }

}
