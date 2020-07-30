import UserId from '../User/UserId/UserId';

export interface IFollower {
  readonly userId: UserId;
  readonly follower: Set<UserId>;
  followed(userId: UserId): IFollower;
  unFollowed(userId: UserId): IFollower;
}
