const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { rendererPath, distPath } = require('../utils/path')

module.exports = {
  mode: 'development',
  entry: path.join(rendererPath, 'Main.tsx'),
  output: {
    filename: '[name]-[hash:8].js',
    path: distPath,
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: '    ',
      template: path.join(__dirname, '../public/index.html'),
    }),
    // 新版本clearWebpackPlugin不需要传入清理的目录，其会自动清理webpack配置中output的路径
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-typescript',
            '@babel/preset-react',
          ],
        },
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]_[hash:base64:5]',
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    // 配置后可以直接通过 ./index 既可引入index.ts|tsx|js
    extensions: ['.ts', '.tsx', '.js'],
    // 别名引入
    alias: {
      '@': rendererPath,
    },
  },
}
