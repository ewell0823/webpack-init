const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const outputPath = path.resolve(__dirname, 'dist') // 絶対パスを生成

// console.log({outputPath})

module.exports = {
  // moduleバンドルの対象の設定
  entry: './src/index.js',
  // 成果物の出力先
  output: {
    filename: 'main.js',
    path: outputPath
  },
  module: {
    rules: [
      { 
        test: /\.jsx?$/, // testには拡張子を登録。モダンなシンタックスで書かれたのものはトランスパイルの対象になる。（js or jsx が対象になる）
        exclude: /node_modules/, // node_modulesのディレクトリ配下にあるものはトランスパイルの対象から除外する
        loader: "babel-loader" // トランスパイルの実行
      },
      // {
      //   test: /\.css/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     'css-loader' // revers orderのため、逆順に読み込まれる仕様
      //   ]
      // },
      {
        test: /\.(sc|c)ss/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|peg|gif|svg|ico|png)$/i,
        loader: 'url-loader',
        options: {
          limit: 2048,
          name: './images/[name].[ext]'
        }
      },
      {
        test: /\html$/,
        loader: 'html-loader'
      }
    ]
  },
  devServer: {
    contentBase: outputPath // デフォルト起動画面（index.html）の指定
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css' // [name]はデフォルトでmainになる。[hash]はバンドルの度にユニークの値を設定する（ビルドする度のキャッシュの回避に有効）
    })
  ],
  optimization: { // 「最適化」のこと。
    minimizer: [new UglifyJsPlugin({ // https://github.com/mishoo/UglifyJS2
      uglifyOptions: {
        compress: {
          drop_console: true
        }
      }
    })]
  }
}

// npx webpack --mode development 実行コマンド
