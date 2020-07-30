import UserId from '../User/UserId/UserId';

export interface IFollowing {
  readonly userId: UserId;
  readonly following: Set<UserId>;
  follow(userId: UserId): IFollowing;
  unFollow(userId: UserId): IFollowing;
}
