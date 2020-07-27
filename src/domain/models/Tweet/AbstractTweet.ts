import UserId from '../User/UserId/UserId';
import TweetId from './TweetId/TweetId';
import Content from './Content/Content';
import RetweetMap from './RetweetMap/RetweetMap';
import LikeSet from './LikeSet/LikeSet';
import { AbstractTweetProps } from './IAbstractTweet';

export abstract class AbstractTweet {
  readonly tweetId: TweetId;

  readonly userId: UserId;

  readonly content: Content;

  readonly retweetMap: RetweetMap;

  readonly likeSet: LikeSet;

  readonly tweetedAt: Date;

  protected constructor(props: AbstractTweetProps) {
    const { tweetId, userId, content, retweetMap, likeSet, tweetedAt } = props;
    this.tweetId = tweetId;
    this.userId = userId;
    this.content = content;
    this.retweetMap = retweetMap;
    this.likeSet = likeSet;
    this.tweetedAt = tweetedAt;
  }

  abstract like(userId: UserId): AbstractTweet;

  abstract cancelLike(userId: UserId): AbstractTweet;

  abstract retweet(userId: UserId): AbstractTweet;

  abstract cancelRetweet(userId: UserId): AbstractTweet;
}
