import UserImage from '../../domain/models/User/UserImage';
import HeaderImage from '../../domain/models/User/HeaderImage';

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
    const hoge = new HeaderImage('hoge');
    console.log(hoge);
  }
}
