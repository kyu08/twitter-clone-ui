import UserId from '../User/UserId/UserId';
import TweetId from '../Tweet/TweetId/TweetId';

export interface IRetweetMap {
  readonly tweetId: TweetId;
  readonly retweetMap: Map<UserId, Date>;
  retweet(userId: UserId): IRetweetMap;
  cancelRetweet(userId: UserId): IRetweetMap;
}
