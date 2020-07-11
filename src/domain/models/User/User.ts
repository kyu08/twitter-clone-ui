import { IUser } from './IUser';
import Profile from './Profile/Profile';
import UserId from './UserId/UserId';
import Following from './Following/Following';
import Follower from './Follower/Follower';
import { IBirthday } from './Profile/Birthday';

interface UserProps {
  readonly follower: Follower;
  readonly following: Following;
  readonly profile: Profile;
  readonly userId: UserId;
}

export class User implements IUser {
  readonly follower: Follower;

  readonly following: Following;

  // todo あとImage系の実装
  readonly profile: Profile;

  // todo まだ中身実装してない
  readonly userId: UserId;

  constructor(props: UserProps) {
    const { follower, following, profile, userId } = props;
    this.follower = follower;
    this.following = following;
    this.profile = profile;
    this.userId = userId;
  }

  private getFollower(): Follower {
    return this.follower;
  }

  private getFollowing(): Following {
    return this.following;
  }

  private getProfile(): Profile {
    return this.profile;
  }

  // 共通化したい〜〜〜
  follow(userId: UserId): User {
    const following = this.getFollowing().follow(userId);

    return this.returnUpdatedInstance('following', following);
  }

  unFollow(userId: UserId): User {
    const following = this.getFollowing().unFollow(userId);

    return this.returnUpdatedInstance('following', following);
  }

  followed(userId: UserId): User {
    const follower = this.getFollower().followed(userId);

    return this.returnUpdatedInstance('follower', follower);
  }

  unFollowed(userId: UserId): User {
    const follower = this.getFollower().unFollowed(userId);

    return this.returnUpdatedInstance('follower', follower);
  }

  updateBio(bioString: string): User {
    const profile = this.getProfile().updateBio(bioString);

    return this.returnUpdatedInstance('profile', profile);
  }

  updateBirthday(birthdayProps: IBirthday): User {
    const profile = this.getProfile().updateBirthday(birthdayProps);

    return this.returnUpdatedInstance('profile', profile);
  }

  updateUserLocation(userLocationString: string): User {
    const profile = this.getProfile().updateUserLocation(userLocationString);

    return this.returnUpdatedInstance('profile', profile);
  }

  updateWebsite(webSiteString: string): User {
    const profile = this.getProfile().updateWebsite(webSiteString);

    return this.returnUpdatedInstance('profile', profile);
  }

  updateUserName(userNameString: string): User {
    const profile = this.getProfile().updateWebsite(userNameString);

    return this.returnUpdatedInstance('profile', profile);
  }

  returnUpdatedInstance<T extends keyof User>(key: T, value: User[T]): User {
    return new User({ ...this, ...{ [key]: value } });
  }
}
