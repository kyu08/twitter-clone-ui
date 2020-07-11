import { IProfile, ProfileProps } from './IProfile';
import Bio from './Bio';
import UserLocation from './UserLocation';
import ScreenName from './ScreenName';
import UserName from './UserName';
import Website from './Website';
import Birthday from './Birthday';
import UserImage from './UserImage';
import HeaderImage from './HeaderImage';

export default class Profile implements IProfile {
  readonly bio: Bio;

  readonly birthday: Birthday;

  readonly headerImage: HeaderImage;

  readonly screenName: ScreenName;

  readonly userLocation: UserLocation;

  readonly userName: UserName;

  readonly userImage: UserImage;

  readonly website: Website;

  constructor(props: ProfileProps) {
    const {
      bio,
      birthday,
      headerImage,
      screenName,
      userLocation,
      userImage,
      userName,
      website,
    } = props;
    this.bio = bio;
    this.birthday = birthday;
    this.headerImage = headerImage;
    this.screenName = screenName;
    this.userLocation = userLocation;
    this.userImage = userImage;
    this.userName = userName;
    this.website = website;
  }
}
