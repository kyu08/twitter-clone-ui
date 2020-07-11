import UserId from '../../User/UserId/UserId';

export interface ILikeSet {
  // todo ここ Date だと不十分？ 値オブジェクト作った方がいい？
  readonly likeSet: Set<UserId>;
  like(userId: UserId): ILikeSet;
  cancelLike(userId: UserId): ILikeSet;
}
