import UserId from '../UserId/UserId';
// eslint-disable-next-line import/no-cycle
import Following from './Following';

export interface IFollowing {
  readonly following: Set<UserId>;
  follow(userId: UserId): Following;
}
