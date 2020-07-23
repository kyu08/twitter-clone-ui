import UserId from '../../User/UserId/UserId';

export interface ILikeSet {
  readonly likeSet: Set<UserId>;
  like(userId: UserId): ILikeSet;
  cancelLike(userId: UserId): ILikeSet;
}
