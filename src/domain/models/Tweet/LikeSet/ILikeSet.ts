import UserId from '../../User/UserId/UserId';
import LikeSet from './LikeSet';

export interface ILikeSet {
  // todo ここ Date だと不十分？ 値オブジェクト作った方がいい？
  readonly likeSet: Set<UserId>;
  like(userId: UserId): LikeSet;
  cancelLike(userId: UserId): LikeSet;
}
