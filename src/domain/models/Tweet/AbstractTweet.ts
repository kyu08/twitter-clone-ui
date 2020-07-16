import UserId from '../User/UserId/UserId';
import { TODO } from '../../../util/Util';
import TweetId from './TweetId/TweetId';
import Content from './Content/Content';
import RetweetMap from './RetweetMap/RetweetMap';
import LikeSet from './LikeSet/LikeSet';
import { AbstractTweetProps } from './IAbstractTweet';

export abstract class AbstractTweet {
  // todo protected にできない
  readonly tweetId: TweetId;

  readonly userId: UserId;

  readonly content: Content;

  readonly retweetMap: RetweetMap;

  readonly likeSet: LikeSet;

  readonly tweetedAt: Date;

  // timeline の表示ロジックにもよるけどたぶんいらない気がする
  readonly updatedAt: Date;

  protected constructor(
    // todo props: AbstractTweet やな
    props: AbstractTweetProps,
  ) {
    const {
      tweetId,
      userId,
      content,
      retweetMap,
      likeSet,
      tweetedAt,
      updatedAt,
    } = props;
    this.tweetId = tweetId;
    this.userId = userId;
    this.content = content;
    this.retweetMap = retweetMap;
    this.likeSet = likeSet;
    this.tweetedAt = tweetedAt;
    this.updatedAt = updatedAt;
  }

  abstract like(userId: UserId): AbstractTweet;

  abstract cancelLike(userId: UserId): AbstractTweet;

  abstract retweet(userId: UserId): AbstractTweet;

  abstract cancelRetweet(userId: UserId): AbstractTweet;
}
