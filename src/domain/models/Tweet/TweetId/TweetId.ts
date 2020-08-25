export default class TweetId {
  readonly tweetId: string;

  constructor(tweetId: string) {
    if (tweetId.length !== 36) throw new Error('tweetId is invalid.');
    this.tweetId = tweetId;
  }
}
