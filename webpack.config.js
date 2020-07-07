const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const srcDir = './lib/'
const destDir = path.join(__dirname, '/dist/')

module.exports = {
  mode: 'development',
  entry: {
    'es6-menu-aim': srcDir + 'es6-menu-aim.ts',
    script: srcDir + 'script.ts'
  },
  output: {
    path: destDir,
    filename: '[name].js',
    libraryTarget: 'umd'
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  devtool: 'source-map',

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
          'ts-loader'
        ]
      }
    ]
  },
  externals: {
    lodash: 'lodash'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'lib/index.html'
    })
  ]
}
