import { IProfile } from './IProfile';
import Bio from './Bio';
import Site from './Site';
import ScreenName from './ScreenName';
import UserName from './UserName';
import Website from './Website';
import Birthday from './Birthday';
import UserImage from './UserImage';
import HeaderImage from './HeaderImage';

export default class Profile implements IProfile {
  // todo add each validation
  readonly bio: Bio;

  readonly birthday: Birthday;

  readonly headerImage: HeaderImage;

  readonly screenName: ScreenName;

  readonly site: Site;

  readonly userName: UserName;

  readonly userImage: UserImage;

  readonly website: Website;

  constructor(props: IProfile) {
    const {
      bio,
      birthday,
      headerImage,
      screenName,
      site,
      userImage,
      userName,
      website,
    } = props;
    this.bio = bio;
    this.birthday = birthday;
    this.headerImage = headerImage;
    this.screenName = screenName;
    this.site = site;
    this.userImage = userImage;
    this.userName = userName;
    this.website = website;
  }
}
