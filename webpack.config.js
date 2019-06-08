const path = require('path')
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
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader' // revers orderのため、逆順に読み込まれる仕様
        ]
      }
    ]
  },
  devServer: {
    contentBase: outputPath // デフォルト起動画面（index.html）の指定
  }
}

// npx webpack --mode development 実行コマンド
