let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.ts",
  output: {
      path: __dirname + '/dist',
      filename: "./js/bundle.js",
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  // resolve: {
  //     // Add '.ts' and '.tsx' as resolvable extensions.
  //     extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  // },

  module: {
      loaders: [
          // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
          { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
      ],

      // preLoaders: [
      //     // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      //     { test: /\.js$/, loader: "source-map-loader" }
      // ]
  },

  devServer: {
      contentBase: './',
      watchContentBase: true,
      disableHostCheck: true
  },

  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  })]

};