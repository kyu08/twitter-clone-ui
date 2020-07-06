import { IUser } from './IUser';
import { TODO } from '../../../util/Util';
import Profile from './Profile';

export class User implements IUser {
  readonly userId: TODO<'userId'>;

  readonly following: TODO<'following'>;

  readonly follower: TODO<'follower'>;

  readonly profile: Profile;

  constructor(props: IUser) {
    const { follower, following, profile, userId } = props;
    this.follower = follower;
    this.following = following;
    this.profile = profile;
    this.userId = userId;
  }
}
