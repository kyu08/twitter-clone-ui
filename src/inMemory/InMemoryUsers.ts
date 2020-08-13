import { IUser } from '../domain/models/User/IUser';
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

export interface IProps {
  day: number;
  month: number;
  year: number;
  bio: string;
  headerImage: string;
  userLocation: string;
  screenName: string;
  userName: string;
  userImage: string;
  website: string;
  followerCount: number;
  followingCount: number;
  userId: string;
}

export interface IUserProps {
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
  followerCount: number;
  followingCount: number;
  userId: UserId;
}

const userFactory = (props: IUserProps) => {
  const {
    bio,
    day,
    followerCount,
    followingCount,
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

  return new User({ profile, followerCount, followingCount, userId });
};

const userA = userFactory({
  day: new Day(29),
  month: new Month(5),
  year: new Year(1996),
  bio: new Bio('hello'),
  headerImage: new HeaderImage('kyukyu'),
  userLocation: new UserLocation('tokyo'),
  screenName: new ScreenName('kyu08'),
  userName: new UserName('kyuushima'),
  userImage: new UserImage('kyu'),
  website: new Website('kyu08.com'),
  followerCount: 10,
  followingCount: 13,
  userId: new UserId('e15a1c26-9a65-4f89-91b0-99b2055ae26f'),
});

const userB = userFactory({
  day: new Day(15),
  month: new Month(1),
  year: new Year(1919),
  bio: new Bio('i am userId 1'),
  headerImage: new HeaderImage('hoge'),
  userLocation: new UserLocation('hokkaido'),
  screenName: new ScreenName('test1'),
  userName: new UserName('test_user_1'),
  userImage: new UserImage('te'),
  website: new Website('testUser1.com'),
  followerCount: 11,
  followingCount: 10000,
  userId: new UserId('bad9996f-c846-4d86-9868-da57e19427f8'),
});

const userC = userFactory({
  day: new Day(1),
  month: new Month(1),
  year: new Year(2020),
  bio: new Bio('fugafuga'),
  headerImage: new HeaderImage('hogehoge'),
  userLocation: new UserLocation('chiba'),
  screenName: new ScreenName('test2'),
  userName: new UserName('test_dayo2'),
  userImage: new UserImage('test2'),
  website: new Website('test2.com'),
  followerCount: 11,
  followingCount: 10000,
  userId: new UserId('7e275e25-e12f-408b-b3e7-32a65c1553cc'),
});

export const inMemoryUsers: IUser[] = [userA, userB, userC];

export const inMemoryUserMap: Map<string, IUser> = new Map([
  [userA.userId.userId, userA],
  [userB.userId.userId, userB],
  [userC.userId.userId, userC],
]);
