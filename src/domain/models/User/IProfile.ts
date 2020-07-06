import { TODO } from '../../../util/Util';
import Bio from './Bio';
import Site from './Site';
import ScreenName from './ScreenName';
import UserName from './UserName';
import Website from './Website';

export interface IProfile {
  readonly bio: Bio;
  readonly birthday: TODO<'Birthday'>;
  readonly headerImage: TODO<'HeaderImage'>;
  readonly site: Site;
  // @hoge の hoge の部分
  readonly screenName: ScreenName;
  readonly userName: UserName;
  readonly userImage: TODO<'UserImage'>;
  readonly website: Website;
}
