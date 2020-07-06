import { IProfile } from './IProfile';
import { TODO } from '../../../util/Util';
import Bio from './Bio';
import Site from './Site';

export default class Profile implements IProfile {
  // todo add each validation
  readonly bio: Bio;

  readonly birthday: TODO<'Birthday'>;

  readonly headerImage: TODO<'HeaderImage'>;

  readonly site: Site;

  // @hoge の hoge の部分
  readonly screenName: TODO<'ScreenName'>;

  readonly userName: TODO<'UserName'>;

  readonly userImage: TODO<'UserImage'>;

  readonly website: TODO<'Website'>;

  constructor(props: IProfile) {
    const {
      bio,
      birthday,
      headerImage,
      site,
      screenName,
      userImage,
      userName,
      website,
    } = props;
    this.bio = bio;
    this.birthday = birthday;
    this.headerImage = headerImage;
    this.site = site;
    this.screenName = screenName;
    this.userImage = userImage;
    this.userName = userName;
    this.website = website;
  }
}
