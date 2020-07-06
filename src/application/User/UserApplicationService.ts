import Profile from '../../domain/models/User/Profile';
import { IProfile } from '../../domain/models/User/IProfile';
import Bio from '../../domain/models/User/Bio';

export default class UserApplicationService {
  static test() {
    const props: IProfile = {
      bio: 'jpoge',
      birthday: 'jpoge',
      headerImage: 'jpoge',
      location: 'jpoge',
      screenName: 'jpoge',
      userName: 'jpoge',
      userImage: 'jpoge',
      website: 'jpoge',
    };
    const hoge = new Profile(props);
    console.log(hoge);

    const bio = new Bio('hogehogehogehogehoge');
    console.log(bio);
  }
}
