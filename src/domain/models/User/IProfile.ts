import { TODO } from '../../../util/Util';
import Bio from './Bio';
import Site from './Site';
import ScreenName from './ScreenName';
import UserName from './UserName';
import Website from './Website';
import Birthday from './Birthday';

export interface IProfile {
  readonly bio: Bio;
  readonly birthday: Birthday;
  readonly headerImage: TODO<'HeaderImage'>;
  readonly site: Site;
  readonly screenName: ScreenName;
  readonly userName: UserName;
  readonly userImage: TODO<'UserImage'>;
  readonly website: Website;
}
