import UserId from '../../User/UserId/UserId';
import RetweetMap from './RetweetMap';

export interface IRetweetMap {
  // todo ここ Date だと不十分？ 値オブジェクト作った方がいい？
  readonly retweetMap: Map<UserId, Date>;
  retweet(userId: UserId): RetweetMap;
  cancelRetweet(userId: UserId): RetweetMap;
}
