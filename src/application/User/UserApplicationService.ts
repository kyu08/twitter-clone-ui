import HeaderImage from '../../domain/models/User/Profile/HeaderImage';
import Bio from '../../domain/models/User/Profile/Bio';
import {
  IProfile,
  ProfileProps,
} from '../../domain/models/User/Profile/IProfile';
import UserLocation from '../../domain/models/User/Profile/UserLocation';
import ScreenName from '../../domain/models/User/Profile/ScreenName';
import UserName from '../../domain/models/User/Profile/UserName';
import Website from '../../domain/models/User/Profile/Website';
import Profile from '../../domain/models/User/Profile/Profile';
import UserImage from '../../domain/models/User/Profile/UserImage';
import Day from '../../domain/models/User/Profile/Birthday/Day';
import Month from '../../domain/models/User/Profile/Birthday/Month';
import Year from '../../domain/models/User/Profile/Birthday/Year';
import Birthday from '../../domain/models/User/Profile/Birthday';
import Follower from '../../domain/models/User/Follower/Follower';
import Following from '../../domain/models/User/Following/Following';
import { User } from '../../domain/models/User/User';
import UserId from '../../domain/models/User/UserId/UserId';

export default class UserApplicationService {
  static test() {
    const birthdayProps = {
      day: new Day(15),
      month: new Month(1),
      year: new Year(1919),
    };
    const props: ProfileProps = {
      bio: new Bio('hoeg'),
      birthday: new Birthday(birthdayProps),
      headerImage: new HeaderImage('hoge'),
      userLocation: new UserLocation('hoge'),
      screenName: new ScreenName('tarthu'),
      userName: new UserName('123'),
      userImage: new UserImage('userimage'),
      website: new Website('hogehoge.com'),
    };
    const profile = new Profile(props);
    const userProps = {
      follower: new Follower(new Set()),
      following: new Following(new Set()),
      profile,
      userId: new UserId(123123),
    };
    const user = new User(userProps);
    const userIdB = new UserId(23);
    const userUpdated = user.followed(userIdB);
    const userUnFollowed = userUpdated.unFollowed(userIdB);
    console.log(userUpdated);
    console.log(userUnFollowed);
  }
}
