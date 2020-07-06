import { IUser } from './IUser';
import Profile from './Profile';
import UserId from './UserId';
import Following from './Following';
import Follower from './Follower';

export class User implements IUser {
  // todo まだ中身実装してない
  readonly follower: Follower;

  readonly following: Following;

  readonly profile: Profile;

  readonly userId: UserId;

  constructor(props: IUser) {
    const { follower, following, profile, userId } = props;
    this.follower = follower;
    this.following = following;
    this.profile = profile;
    this.userId = userId;
  }
}
