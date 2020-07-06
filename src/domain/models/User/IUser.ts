import Profile from './Profile';
import UserId from './UserId';
import Following from './Following';
import Follower from './Follower';

export interface IUser {
  readonly follower: Follower;
  readonly following: Following;
  readonly profile: Profile;
  readonly userId: UserId;
}
