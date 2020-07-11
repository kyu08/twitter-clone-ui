import UserId from '../UserId/UserId';

export interface IFollower {
  readonly follower: Set<UserId>;
  followed(userId: UserId): IFollower;
  unFollowed(userId: UserId): IFollower;
}
