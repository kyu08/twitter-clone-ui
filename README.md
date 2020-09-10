Twitter の clone app(UI)
https://www.youtube.com/watch?v=cLUPSaMOzU4
https://www.youtube.com/watch?v=bGhi5JwzmPM

# やることの流れ

- [x]  仕様を決める(どういった機能が欲しいのか)
- [x]  ユースケースからドメインオブジェクトのデータ構造・振る舞いを定義していく。分析のためにユースケース図・シーケンス図・クラス図などを使ったり。
- [x]  domain まわりのコードを書いていく。
- [x]  コンポーネント設計
- [x]  バックエンド設計
- [x]  ER図書いたり？
- [ ]  フロントつくっていく(最初はインメモリで)

# 仕様(機能要件)

## UI

- mobile のUIを再現する
- timeline, 通知, プロフィールページ をつくる

## initial release で実装したい

### tweet

- tweet を投稿できる
- favo れる
- retweet できる
- timeline がある
- reply できる
- 自分の tweet を削除できる

### user

- ログインできる
- プロフィールページが存在して機能する
- ユーザー名を編集できる
- user 画像が設定できる
- header 画像が設定できる
- follow できる
- 自分の follower がみれる
- 自分の following がみれる
- bio の表示ができる
- bio の編集ができる
- 通知が見れる

## いつか実装しよう

- 画像の投稿・表示ができる
- 動画の投稿・再生
- 下書き機能
- スレッド機能
- DM 機能
- 鍵アカ
- ブロック機能

# どの辺が技術的挑戦要素？

- UI をちゃんと作る(ネイティブ app の UI を再現する)
- DDD 実践
- ちゃんとデプロイもする
- ちゃんとしたweb app をひととおり自分で作る
- DB 設計(正規化)
- TypeScript で API サーバを書く(API 設計)(Scala 学ぶ？)
- バックエンドも動けば OK じゃなくて拡張性の高い設計をする
