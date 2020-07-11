import Bio from './Bio';
import Site from './Site';
import ScreenName from './ScreenName';
import UserName from './UserName';
import Website from './Website';
import Birthday from './Birthday';
import UserImage from './UserImage';
import HeaderImage from './HeaderImage';

export interface IProfile {
  readonly bio: Bio;
  readonly birthday: Birthday;
  readonly headerImage: HeaderImage;
  readonly site: Site;
  readonly screenName: ScreenName;
  readonly userName: UserName;
  readonly userImage: UserImage;
  readonly website: Website;
}
