import { TODO } from '../../../util/Util';

export interface IProfile {
  readonly bio: TODO<'Bio'>;
  readonly birthday: TODO<'Birthday'>;
  readonly headerImage: TODO<'HeaderImage'>;
  readonly location: TODO<'Location'>;
  // @hoge の hoge の部分
  readonly screenName: TODO<'ScreenName'>;
  readonly userName: TODO<'UserName'>;
  readonly userImage: TODO<'UserImage'>;
  readonly website: TODO<'Website'>;
}
