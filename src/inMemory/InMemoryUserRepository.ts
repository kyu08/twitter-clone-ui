import * as _ from 'lodash';
import UserId from '../domain/models/User/UserId/UserId';
import { IUser } from '../domain/models/User/IUser';
import { hostURL, TODO } from '../util/Util';
// eslint-disable-next-line import/no-cycle
import { IUserRepository } from '../domain/models/User/IUserRepository';
import { inMemoryUserMap, IProps, IUserProps } from './InMemoryUsers';
import { ScreenNamePasswordMap } from './InMemoryScreenNamePassword';
import Bio from '../domain/models/User/Profile/Bio';
import Day from '../domain/models/User/Profile/Birthday/Day';
import HeaderImageURL from '../domain/models/User/Profile/HeaderImageURL';
import Month from '../domain/models/User/Profile/Birthday/Month';
import ScreenName from '../domain/models/User/Profile/ScreenName';
import UserImageURL from '../domain/models/User/Profile/UserImageURL';
import UserLocation from '../domain/models/User/Profile/UserLocation';
import UserName from '../domain/models/User/Profile/UserName';
import Website from '../domain/models/User/Profile/Website';
import Year from '../domain/models/User/Profile/Birthday/Year';
import Birthday from '../domain/models/User/Profile/Birthday';
import Profile from '../domain/models/User/Profile/Profile';
import { User } from '../domain/models/User/User';

export type userFull = {
  id: string;
  screen_name: string;
  user_name: string;
  header_image_url: string;
  user_image_url: string;
  bio: string;
  birthday: string;
  user_location: string;
  website: string;
  created_at: string;
  followerCount: number;
  followingCount: number;
};

export default class InMemoryUserRepository implements IUserRepository {
  // todo これたぶん使う必要ない
  private static returnUserMap(): Map<string, IUser> {
    const usersJSON = localStorage.getItem('userMap');
    if (!usersJSON) throw Error('There is no userMapInLS');
    const usersJSONParsed = JSON.parse(usersJSON);

    return InMemoryUserRepository.instantiateUsersFromJSON(usersJSONParsed);
  }

  private static saveUserMap(userMap: Map<string, IUser>): void {
    const userMapJSON = InMemoryUserRepository.MapToArray(userMap);
    localStorage.setItem('userMap', userMapJSON);
  }

  private static MapToArray(userMap: Map<string, IUser>): string {
    const userMapSetArray = InMemoryUserRepository.SetToArray(userMap);
    const userMapArray = Array.from(userMapSetArray);

    return JSON.stringify(userMapArray);
  }

  // LS からもってきた値を User インスタンス化して UserMap をかえす
  private static instantiateUsersFromJSON(
    users: TODO<'usersParsed'>[],
  ): Map<string, IUser> {
    const map = new Map();

    users.forEach((u) => {
      const { userId } = new UserId(u[0]);
      const props = InMemoryUserRepository.createUserPropsFromJSON(u[1]);

      // todo ここで follow系 Set もいじる(UserId にして new Set()する)
      const user = InMemoryUserRepository.create(props);
      map.set(userId, user);
    });

    return map;
  }

  toInstanceUserId(userIdString: string): UserId {
    return new UserId(userIdString);
  }

  static SetToArray(userMap: Map<string, any>): Map<string, any> {
    userMap.forEach((user) => {
      // eslint-disable-next-line no-param-reassign
      user.following.following = Array.from(user.following.following);
      // eslint-disable-next-line no-param-reassign
      user.follower.follower = Array.from(user.follower.follower);
    });

    return userMap;
  }

  // LS に 初期値を set
  static initializeLocalStorage(): void {
    const userMapInLocalStorage = localStorage.getItem('userMap');
    if (!userMapInLocalStorage) {
      const userMapJSON = JSON.stringify(inMemoryUserMap);
      localStorage.setItem('userMap', userMapJSON);
    }
  }

  getUserJson(userId: UserId): Promise<Response> {
    const userIdString = userId.userId;

    return fetch(`${hostURL}/user/${userIdString}/full`, {
      mode: 'cors',
    });
  }

  getUserByUserId(userId: UserId): IUser {
    const userMap = InMemoryUserRepository.returnUserMap();
    let user: IUser;
    userMap.forEach((userInUserMap, userIdInUserMap) => {
      if (userIdInUserMap === userId.userId) user = userInUserMap;
    });

    // todo ここなんとかする
    // @ts-ignore
    if (user === undefined) throw new Error('user undefined');

    return user;
  }

  save(user: IUser): void {
    const { userId } = user.getUserId();
    const userMap = InMemoryUserRepository.returnUserMap();
    const userMapCopy = _.cloneDeep(userMap);
    userMapCopy.set(userId, user);
    InMemoryUserRepository.saveUserMap(userMapCopy);
  }

  returnUserIdByScreenName(screenName: string): string {
    let userIdFound;
    inMemoryUserMap.forEach((user, userId) => {
      if (user.getScreenName().screenName === screenName) {
        userIdFound = userId;
      }
    });
    if (userIdFound) {
      return userIdFound;
    }
    throw new Error('no user has this screenName.');
  }

  isAuthorized(screenName: string, password: string): boolean {
    const passwordExpected = ScreenNamePasswordMap.get(screenName);

    if (passwordExpected === undefined || passwordExpected !== password) {
      console.log('invalid access.');

      return false;
    }
    console.log('logged in.');

    return true;
  }

  setUserIdToLocalStorage(userId: UserId): void {
    localStorage.setItem('userId', userId.userId);
  }

  getUserIdFromLocalStorage(): UserId | null {
    const userIdInLocalStorage = localStorage.getItem('userId');
    if (!userIdInLocalStorage) return null;

    return this.toInstanceUserId(userIdInLocalStorage);
  }

  removeUserIdFromLocalStorage(): void {
    localStorage.removeItem('userId');
  }

  // 使われてない
  static createUserPropsFromJSON({
    followerCount,
    followingCount,
    userId,
    profile,
  }: TODO<'userPropsJSON'>): IUserProps {
    return InMemoryUserRepository.createProps({
      bio: profile.bio.bio,
      day: profile.birthday.day.day,
      followerCount,
      followingCount,
      headerImageURL: profile.headerImageURL.headerImageURL,
      month: profile.birthday.month.month,
      screenName: profile.screenName.screenName,
      userId: userId.userId,
      userImageURL: profile.userImageURL.userImageURL,
      userLocation: profile.userLocation.userLocation,
      userName: profile.userName.userName,
      website: profile.website.website,
      year: profile.birthday.year.year,
    });
  }

  // 使われてない
  static createProps({
    bio,
    day,
    followerCount,
    followingCount,
    headerImageURL,
    month,
    screenName,
    userId,
    userImageURL,
    userLocation,
    userName,
    website,
    year,
  }: IProps): IUserProps {
    return {
      bio: new Bio(bio),
      day: new Day(day),
      followerCount,
      followingCount,
      headerImageURL: new HeaderImageURL(headerImageURL),
      month: new Month(month),
      screenName: new ScreenName(screenName),
      userId: new UserId(userId),
      userImageURL: new UserImageURL(userImageURL),
      userLocation: new UserLocation(userLocation),
      userName: new UserName(userName),
      website: new Website(website),
      year: new Year(year),
    };
  }

  // 使われてない
  static create(props: IUserProps): IUser {
    const {
      bio,
      day,
      followerCount,
      followingCount,
      headerImageURL,
      month,
      screenName,
      userId,
      userImageURL,
      userLocation,
      userName,
      website,
      year,
    } = props;
    const birthday = new Birthday({ day, month, year });
    const profile = new Profile({
      birthday,
      bio,
      headerImageURL,
      screenName,
      userImageURL,
      userLocation,
      userName,
      website,
    });

    return new User({ profile, followerCount, followingCount, userId });
  }

  toInstance({
    id: userId,
    screen_name: screenName,
    user_name: userName,
    header_image_url: headerImageURL,
    user_image_url: userImageURL,
    bio,
    birthday: birthdayProp,
    user_location: userLocation,
    website,
    // created_at: createdAt,
    followerCount,
    followingCount,
  }: userFull): User {
    const date = new Date(birthdayProp);
    const year = new Year(date.getFullYear());
    const month = new Month(date.getMonth() + 1);
    const day = new Day(date.getDate());
    const profileProps = {
      screenName: new ScreenName(screenName),
      userName: new UserName(userName),
      headerImageURL: new HeaderImageURL(headerImageURL),
      userImageURL: new UserImageURL(userImageURL),
      bio: new Bio(bio),
      birthday: new Birthday({ year, month, day }),
      userLocation: new UserLocation(userLocation),
      website: new Website(website),
    };
    const profile = new Profile(profileProps);

    return new User({
      profile,
      followerCount,
      followingCount,
      userId: new UserId(userId),
    });
  }
}
