const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: {

  },
  output: {
    path: path.resolve(__dirname, 'build_dist'),
    clean: true,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/components/navigationbar-wxTaro/',
          to: './'
        }
      ]
    })
  ],
  mode: "production",
}
