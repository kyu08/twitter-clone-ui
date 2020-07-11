import UserId from '../UserId/UserId';

export interface IFollower {
  readonly follower: Set<UserId>;
}
