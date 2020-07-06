import Day from '../../domain/models/User/Day';

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
    const hoge = new Day(30);
    console.log(hoge);
  }
}
