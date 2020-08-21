// webpack.config.js

/** @type {import('webpack/declarations/WebpackOptions').WebpackOptions} */
module.exports = {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
};
