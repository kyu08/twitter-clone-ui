import Profile from './Profile/Profile';
import UserId from './UserId/UserId';
import Following from './Following/Following';
import Follower from './Follower/Follower';

export interface IUser {
  readonly follower: Follower;
  readonly following: Following;
  readonly profile: Profile;
  readonly userId: UserId;
}
