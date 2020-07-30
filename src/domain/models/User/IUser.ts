import Profile from './Profile/Profile';
import UserId from './UserId/UserId';
import { BirthdayProps } from './Profile/Birthday';

export interface UserProps {
  readonly profile: Profile;
  readonly userId: UserId;
  readonly followerCount: number;
  readonly followingCount: number;
}

export interface IUser extends UserProps {
  updateBio(bioString: string): IUser;
  updateBirthday(birthdayProps: BirthdayProps): IUser;
  returnUpdatedInstance<T extends keyof IUser>(key: T, value: IUser[T]): IUser;
  updateUserLocation(userLocationString: string): IUser;
  updateWebsite(webSiteString: string): IUser;
  updateUserName(userNameString: string): IUser;
  getUserId(): UserId;
}
