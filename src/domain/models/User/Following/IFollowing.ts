import UserId from '../UserId/UserId';

export interface IFollowing {
  readonly following: Set<UserId>;
}
