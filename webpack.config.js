import css from "/Users/catharina/Creative Cloud Files/ENSEMBLE/DIGITAL/avr/css";


module.exports = {

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],

      },

    ],

  },
};