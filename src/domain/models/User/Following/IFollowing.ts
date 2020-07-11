import UserId from '../UserId/UserId';

export interface IFollowing {
  readonly following: Set<UserId>;
  follow(userId: UserId): IFollowing;
  unFollow(userId: UserId): IFollowing;
}
