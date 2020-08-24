import { AbstractTweet } from '../domain/models/Tweet/AbstractTweet';

export class TweetDataModel {
  readonly tweetId: string;

  readonly screenName: string;

  readonly content: string;

  readonly replyCount: number;

  readonly retweetCount: number;

  readonly likeCount: number;

  readonly createdAt: Date;

  readonly userImageURL: string;

  readonly userName: string;

  constructor({
    tweetId,
    screenName,
    content,
    replyCount,
    retweetCount,
    likeCount,
    createdAt,
    userImageURL,
    userName,
  }: AbstractTweet) {
    this.tweetId = tweetId.tweetId;
    this.screenName = screenName.screenName;
    this.content = content.content;
    this.replyCount = replyCount;
    this.retweetCount = retweetCount;
    this.likeCount = likeCount;
    this.createdAt = createdAt;
    this.userImageURL = userImageURL.userImageURL;
    this.userName = userName.userName;
  }
}
