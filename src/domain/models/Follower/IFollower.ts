import UserId from '../User/UserId/UserId';

export interface IFollower {
  readonly follower: Set<UserId>;
  followed(userId: UserId): IFollower;
  unFollowed(userId: UserId): IFollower;
}
