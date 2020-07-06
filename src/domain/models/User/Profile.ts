import { IProfile } from './IProfile';
import { TODO } from '../../../util/Util';
import Bio from './Bio';
import Site from './Site';
import ScreenName from './ScreenName';

export default class Profile implements IProfile {
  // todo add each validation
  readonly bio: Bio;

  readonly birthday: TODO<'Birthday'>;

  readonly headerImage: TODO<'HeaderImage'>;

  // @hoge の hoge の部分
  readonly screenName: ScreenName;

  readonly site: Site;

  readonly userName: TODO<'UserName'>;

  readonly userImage: TODO<'UserImage'>;

  readonly website: TODO<'Website'>;

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
