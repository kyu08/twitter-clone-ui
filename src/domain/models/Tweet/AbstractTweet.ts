import UserId from '../User/UserId/UserId';
import TweetId from './TweetId/TweetId';
import Content from './Content/Content';
import RetweetMap from './RetweetMap/RetweetMap';
import LikeSet from './LikeSet/LikeSet';
import { AbstractTweetProps } from './IAbstractTweet';
import ScreenName from '../User/Profile/ScreenName';

export abstract class AbstractTweet {
  readonly tweetId: TweetId;

  readonly screenName: ScreenName;

  readonly content: Content;

  readonly retweetMap: RetweetMap;

  readonly likeSet: LikeSet;

  readonly tweetedAt: Date;

  protected constructor(props: AbstractTweetProps) {
    const {
      tweetId,
      screenName,
      content,
      retweetMap,
      likeSet,
      tweetedAt,
    } = props;
    this.tweetId = tweetId;
    this.screenName = screenName;
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
