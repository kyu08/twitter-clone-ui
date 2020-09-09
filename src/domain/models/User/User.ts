import { IUser } from './IUser';
import Profile from './Profile/Profile';
import UserId from './UserId/UserId';
import { BirthdayProps } from './Profile/Birthday';
import ScreenName from './Profile/ScreenName';
import { ensurePropsContainsNoUndefined } from '../../../util/Util';

interface UserProps {
  readonly profile: Profile;
  readonly userId: UserId;
  readonly tweetCount: number;
  readonly followingMap: Map<string, Date>;
  readonly followerMap: Map<string, Date>;
}

// todo 集約なので private にしよう
export class User implements IUser {
  readonly tweetCount: number;

  readonly profile: Profile;

  readonly userId: UserId;

  readonly followingMap: Map<string, Date>;

  readonly followerMap: Map<string, Date>;

  constructor(props: UserProps) {
    ensurePropsContainsNoUndefined<UserProps>(props);
    const { tweetCount, profile, userId, followingMap, followerMap } = props;
    this.tweetCount = tweetCount;
    this.profile = profile;
    this.userId = userId;
    this.followingMap = followingMap;
    this.followerMap = followerMap;
  }

  getFollowerCount(): number {
    return this.followerMap.size;
  }

  getFollowingCount(): number {
    return this.followingMap.size;
  }

  private getProfile(): Profile {
    return this.profile;
  }

  updateBio(bioString: string): User {
    const profile = this.getProfile().updateBio(bioString);

    return this.returnUpdatedInstance('profile', profile);
  }

  updateBirthday(birthdayProps: BirthdayProps): User {
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
    const profile = this.getProfile().updateUserName(userNameString);

    return this.returnUpdatedInstance('profile', profile);
  }

  returnUpdatedInstance<T extends keyof User>(key: T, value: User[T]): User {
    return new User({ ...this, ...{ [key]: value } });
  }

  getUserId(): UserId {
    return this.userId;
  }

  getScreenName(): ScreenName {
    return this.getProfile().screenName;
  }
}
