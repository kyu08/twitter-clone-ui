import TweetId from './TweetId';
import UserId from '../User/UserId';
import RetweetMap from './RetweetMap';

export interface IAbstractTweet {
  readonly tweetId: TweetId;
  readonly userId: UserId;
  readonly content: Content;
  readonly retweetMap: RetweetMap;
  readonly likeSet: LikeSet;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
