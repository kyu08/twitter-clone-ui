import Profile from '../../domain/models/User/Profile';
import { IProfile } from '../../domain/models/User/IProfile';
import Bio from '../../domain/models/User/Bio';
import Site from '../../domain/models/User/Site';
import ScreenName from '../../domain/models/User/ScreenName';
import UserName from '../../domain/models/User/UserName';
import Website from '../../domain/models/User/Website';
import Year from '../../domain/models/User/Yaer';

export default class UserApplicationService {
  static test() {
    // const props: IProfile = {
    //   bio: new Bio('hoeg'),
    //   birthday: 'jpoge',
    //   headerImage: 'jpoge',
    //   site: new Site('hoge'),
    //   screenName: new ScreenName('tarthu'),
    //   userName: new UserName('123'),
    //   userImage: 'jpoge',
    //   website: new Website('hogehoge.com'),
    // };
    // const hoge = new Profile(props);
    const hoge = new Year(2020);
    console.log(hoge);
  }
}
