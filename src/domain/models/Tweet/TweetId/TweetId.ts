import { ITweetId } from './ITweetId';

export default class TweetId implements ITweetId {
  readonly tweetId: string;

  constructor(tweetId: string) {
    // todo どうやって一意な id 発行しよう、、、
    // そういうAPIを作ればいいか
    // フロントからはIdなしで送ってバックエンドでidつけることもできるけどそれはエンティティみがないよね〜
    this.tweetId = tweetId;
  }
}
