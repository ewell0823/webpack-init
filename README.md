# webpack-init
webpack 初期設定
## npm 初期化

`npm init -y`

npmのバージョン確認&アップ
`npm i -g npm`

webpackとwebpack-cliのバージョン確認
`npm info webpack`
`npm info webpack-cli`

latestのインストール（開発環境）
`npm install --save-dev webpack@4.29.0`
`npm install --save-dev webpack-cli@3.2.1`

## ローカルサーバ起動

html, jsファイル作成
`touch index.html`
`touch src/index.js`

live-serverのバージョン確認
`npm info live-server`

latestのインストール（開発環境）
`npm i --save-dev live-server@1.2.1`

npx コマンドを使用することで、npmでインストールしたモジュールを実行することができる（相対パスの指定が不要）
`npx live-server`


### webpack以前の方式でwebサイトを見ると...
index.htmlに依存する様々なファイルをブラウザが個々に取得して表示させている
-> データ数が増えればコストかかる（表示に時間がかかる）

### なのでwebpackを適用させよう

webpackはモジュールをかき集めてbundleする。
bundleした成果物の出力先（distディレクトリ）の設定
`mkdir dist`

