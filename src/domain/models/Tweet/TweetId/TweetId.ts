import { ITweetId } from './ITweetId';

export default class TweetId implements ITweetId {
  readonly tweetId: number;

  constructor(tweetId: number) {
    // todo どうやって一意な id 発行しよう、、、
    // そういうAPIを作ればいいか
    // フロントからはIdなしで送ってバックエンドでidつけることもできるけどそれはエンティティみがないよね〜
    this.tweetId = tweetId;
  }
}
