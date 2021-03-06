import Profile from './Profile/Profile';
import UserId from './UserId/UserId';
import { BirthdayProps } from './Profile/Birthday';
import ScreenName from './Profile/ScreenName';

export interface UserProps {
  readonly profile: Profile;
  readonly userId: UserId;
  readonly tweetCount: number;
  readonly followingMap: Map<string, Date>;
  readonly followerMap: Map<string, Date>;
}

export interface IUser extends UserProps {
  getFollowerCount(): number;
  getFollowingCount(): number;
  updateBio(bioString: string): IUser;
  updateBirthday(birthdayProps: BirthdayProps): IUser;
  returnUpdatedInstance<T extends keyof IUser>(key: T, value: IUser[T]): IUser;
  updateUserLocation(userLocationString: string): IUser;
  updateWebsite(webSiteString: string): IUser;
  updateUserName(userNameString: string): IUser;
  getUserId(): UserId;
  getScreenName(): ScreenName;
}
