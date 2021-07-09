__webpack_public_path__ = window.myDynamicPublicPath;

module.exports = {

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        options: {
          url: true,
        },

      },

    ]


  },
};