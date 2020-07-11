import TweetId from './TweetId/TweetId';
import UserId from '../User/UserId/UserId';
import RetweetMap from './RetweetMap/RetweetMap';
import Content from './Content/Content';
import LikeSet from './LikeSet/LikeSet';

export interface AbstractTweetProps {
  readonly tweetId: TweetId;
  readonly userId: UserId;
  readonly content: Content;
  readonly retweetMap: RetweetMap;
  readonly likeSet: LikeSet;
  readonly tweetedAt: Date;
  readonly updatedAt: Date;
}

export interface IAbstractTweet extends AbstractTweetProps {
  like(userId: UserId): IAbstractTweet;
  cancelLike(userId: UserId): IAbstractTweet;
  retweet(userId: UserId): IAbstractTweet;
  cancelRetweet(userId: UserId): IAbstractTweet;
}
