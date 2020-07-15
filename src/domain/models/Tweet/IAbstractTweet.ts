import TweetId from './TweetId/TweetId';
import UserId from '../User/UserId/UserId';
import RetweetMap from './RetweetMap/RetweetMap';
import Content from './Content/Content';
import LikeSet from './LikeSet/LikeSet';

export interface AbstractTweetProps {
  tweetId: TweetId;
  userId: UserId;
  content: Content;
  retweetMap: RetweetMap;
  likeSet: LikeSet;
  tweetedAt: Date;
  updatedAt: Date;
}

export interface IAbstractTweet extends AbstractTweetProps {
  like(userId: UserId): IAbstractTweet;
  cancelLike(userId: UserId): IAbstractTweet;
  retweet(userId: UserId): IAbstractTweet;
  cancelRetweet(userId: UserId): IAbstractTweet;
}
