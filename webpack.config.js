const path = require("path");

module.export = {
  entry: {
    main: "./src/scripts/index.js"
  },
  output: {
    //  below takes current directory and makes it the root of the project.
    path: path.resolve(__dirname, 'public'),
    filename: "main.js",
  }

}
