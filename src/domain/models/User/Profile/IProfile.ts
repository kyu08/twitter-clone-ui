import Bio from './Bio';
import UserLocation from './UserLocation';
import ScreenName from './ScreenName';
import UserName from './UserName';
import Website from './Website';
import Birthday, { BirthdayProps } from './Birthday';
import UserImage from './UserImage';
import HeaderImage from './HeaderImage';

export interface ProfileProps {
  readonly screenName: ScreenName;
  readonly userName: UserName;
  // imageURL にする？
  readonly headerImage: HeaderImage;
  // imageURL にする？
  readonly userImage: UserImage;
  readonly bio: Bio;
  readonly birthday: Birthday;
  readonly userLocation: UserLocation;
  readonly website: Website;
}

export interface IProfile {
  updateBio(bioString: string): IProfile;
  updateBirthday(birthdayProps: BirthdayProps): IProfile;
  updateUserLocation(userLocationString: string): IProfile;
  updateWebsite(webSiteString: string): IProfile;
  updateUserName(userNameString: string): IProfile;
  // todo メソッド実装する
  // updateScreenName(): IProfile;
  // updateHeaderImage(): IProfile;
  // updateUserImage(): IProfile;
}
