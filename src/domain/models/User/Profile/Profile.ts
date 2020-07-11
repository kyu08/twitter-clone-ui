import { IProfile, ProfileProps } from './IProfile';
import Bio from './Bio';
import UserLocation from './UserLocation';
import ScreenName from './ScreenName';
import UserName from './UserName';
import Website from './Website';
import Birthday, { IBirthday } from './Birthday';
import UserImage from './UserImage';
import HeaderImage from './HeaderImage';

export default class Profile implements IProfile {
  readonly screenName: ScreenName;

  readonly userName: UserName;

  readonly headerImage: HeaderImage;

  readonly userImage: UserImage;

  readonly bio: Bio;

  readonly birthday: Birthday;

  readonly userLocation: UserLocation;

  readonly website: Website;

  constructor(props: ProfileProps) {
    const {
      screenName,
      userName,
      headerImage,
      userImage,
      bio,
      birthday,
      userLocation,
      website,
    } = props;
    this.userName = userName;
    this.screenName = screenName;
    this.headerImage = headerImage;
    this.userImage = userImage;
    this.bio = bio;
    this.birthday = birthday;
    this.userLocation = userLocation;
    this.website = website;
  }

  updateBio(bioString: string): Profile {
    const bio = Bio.editBio(bioString);
    const updatedProps = { ...this, bio };

    return new Profile(updatedProps);
  }
}
