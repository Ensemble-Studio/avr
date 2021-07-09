module.exports = {
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],

      },

    ],

  },
};