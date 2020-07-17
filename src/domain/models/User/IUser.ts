import Profile from './Profile/Profile';
import UserId from './UserId/UserId';
import Following from './Following/Following';
import Follower from './Follower/Follower';
import { IBirthday } from './Profile/Birthday';

export interface UserProps {
  readonly follower: Follower;
  readonly following: Following;
  readonly profile: Profile;
  readonly userId: UserId;
}

export interface IUser extends UserProps {
  // todo follow method と同時に followed method を実行したいけどどこでやろうね -> UserApplicationService でやる
  follow(userId: UserId): IUser;
  unFollow(userId: UserId): IUser;
  followed(userId: UserId): IUser;
  unFollowed(userId: UserId): IUser;
  updateBio(bioString: string): IUser;
  updateBirthday(birthdayProps: IBirthday): IUser;
  returnUpdatedInstance<T extends keyof IUser>(key: T, value: IUser[T]): IUser;
  updateUserLocation(userLocationString: string): IUser;
  updateWebsite(webSiteString: string): IUser;
  updateUserName(userNameString: string): IUser;
}
