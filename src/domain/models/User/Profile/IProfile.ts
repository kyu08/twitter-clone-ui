import Bio from './Bio';
import UserLocation from './UserLocation';
import ScreenName from './ScreenName';
import UserName from './UserName';
import Website from './Website';
import Birthday from './Birthday';
import UserImage from './UserImage';
import HeaderImage from './HeaderImage';

export interface ProfileProps {
  readonly bio: Bio;
  readonly birthday: Birthday;
  readonly headerImage: HeaderImage;
  // UserLocation とかでもいいかもね
  readonly userLocation: UserLocation;
  readonly screenName: ScreenName;
  readonly userName: UserName;
  readonly userImage: UserImage;
  readonly website: Website;
}

export interface IProfile {
  updateBio(bioString: string): IProfile;
  // updateBirthday(): IProfile;
  // updateHeaderImage(): IProfile;
  // updateSite(): IProfile;
  // update(): IProfile;
  // update(): IProfile;
  // update(): IProfile;
  // update(): IProfile;
  // update(): IProfile;
}
