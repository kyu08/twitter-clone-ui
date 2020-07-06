import Profile from './Profile';
import UserId from './UserId';
import Following from './Following';
import Follower from './Follower';

// todo value object 使おう
export interface IUser {
  readonly follower: Follower;
  readonly following: Following;
  readonly profile: Profile;
  // todo userId どうやって生成しよう
  readonly userId: UserId;
}
