import Profile from '../../domain/models/User/Profile';
import { IProfile } from '../../domain/models/User/IProfile';
import Bio from '../../domain/models/User/Bio';
import Site from '../../domain/models/User/Site';
import ScreenName from '../../domain/models/User/ScreenName';
import UserName from '../../domain/models/User/UserName';

export default class UserApplicationService {
  static test() {
    const props: IProfile = {
      bio: new Bio('hoeg'),
      birthday: 'jpoge',
      headerImage: 'jpoge',
      site: new Site('hoge'),
      screenName: new ScreenName('tarthu'),
      userName: new UserName('123'),
      userImage: 'jpoge',
      website: 'jpoge',
    };
    const hoge = new Profile(props);
    console.log(hoge);

    const bio = new Bio('hoge');
    console.log(bio);
  }
}
