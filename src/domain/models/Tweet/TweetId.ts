interface ITweetId {
  readonly tweetId: string;
}

export default class TweetId implements ITweetId {
  readonly tweetId: string;

  constructor(tweetId: string) {
    // todo どうやって一意な id 発行しよう、、、
    this.tweetId = tweetId;
  }
}
