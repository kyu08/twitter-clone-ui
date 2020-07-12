import { IUser, UserProps } from '../domain/models/User/IUser';
import Follower from '../domain/models/User/Follower/Follower';
import Following from '../domain/models/User/Following/Following';
import Profile from '../domain/models/User/Profile/Profile';
import UserId from '../domain/models/User/UserId/UserId';
import ScreenName from '../domain/models/User/Profile/ScreenName';
import UserName from '../domain/models/User/Profile/UserName';
import HeaderImage from '../domain/models/User/Profile/HeaderImage';
import UserImage from '../domain/models/User/Profile/UserImage';
import Bio from '../domain/models/User/Profile/Bio';
import Birthday from '../domain/models/User/Profile/Birthday';
import UserLocation from '../domain/models/User/Profile/UserLocation';
import Website from '../domain/models/User/Profile/Website';
import { User } from '../domain/models/User/User';
import Day from '../domain/models/User/Profile/Birthday/Day';
import Month from '../domain/models/User/Profile/Birthday/Month';
import Year from '../domain/models/User/Profile/Birthday/Year';

interface IProps {
  day: Day;
  month: Month;
  year: Year;
  bio: Bio;
  headerImage: HeaderImage;
  userLocation: UserLocation;
  screenName: ScreenName;
  userName: UserName;
  userImage: UserImage;
  website: Website;
  follower: Follower;
  following: Following;
  userId: UserId;
}

const userFactory = (props: IProps) => {
  const {
    bio,
    day,
    follower,
    following,
    headerImage,
    month,
    screenName,
    userId,
    userImage,
    userLocation,
    userName,
    website,
    year,
  } = props;
  const birthday = new Birthday({ day, month, year });
  const profile = new Profile({
    birthday,
    bio,
    headerImage,
    screenName,
    userImage,
    userLocation,
    userName,
    website,
  });

  return new User({ profile, follower, following, userId });
};

const userA = userFactory({
  day: new Day(29),
  month: new Month(5),
  year: new Year(1996),
  bio: new Bio('21sotsu enjinya-'),
  headerImage: new HeaderImage('tori'),
  userLocation: new UserLocation('tokyo'),
  screenName: new ScreenName('kyu08'),
  userName: new UserName('kyuushima'),
  userImage: new UserImage('torisan'),
  website: new Website('kyu08.com'),
  follower: new Follower(new Set()),
  following: new Following(new Set()),
  userId: new UserId(1),
});

const userB = userFactory({
  day: new Day(15),
  month: new Month(1),
  year: new Year(1919),
  bio: new Bio('i am userId 1'),
  headerImage: new HeaderImage('hoge'),
  userLocation: new UserLocation('hokkaido'),
  screenName: new ScreenName('testUser1'),
  userName: new UserName('test_user_1'),
  userImage: new UserImage('te'),
  website: new Website('testUser1.com'),
  follower: new Follower(new Set()),
  following: new Following(new Set()),
  userId: new UserId(2),
});

const userC = userFactory({
  day: new Day(1),
  month: new Month(1),
  year: new Year(2020),
  bio: new Bio('piyopiyo'),
  headerImage: new HeaderImage('piyo'),
  userLocation: new UserLocation('torinosu'),
  screenName: new ScreenName('torisan'),
  userName: new UserName('tori_1'),
  userImage: new UserImage('tori'),
  website: new Website('piyopiyo.com'),
  follower: new Follower(new Set()),
  following: new Following(new Set()),
  userId: new UserId(3),
});

export const inMemoryUsers: IUser[] = [userA, userB, userC];
