import * as _ from 'lodash';
import UserId from '../domain/models/User/UserId/UserId';
import { IUser } from '../domain/models/User/IUser';
import { TODO } from '../util/Util';
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

  getUserIdFromLocalStorage(): string | null {
    return localStorage.getItem('userId');
  }

  removeUserIdFromLocalStorage(): void {
    localStorage.removeItem('userId');
  }

  // 使われてない
  static createUserPropsFromJSON(propsJSON: TODO<'userPropsJSON'>): IUserProps {
    const { followerCount, followingCount, userId, profile } = propsJSON;

    const props = {
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
    };

    return InMemoryUserRepository.createProps(props);
  }

  // 使われてない
  static createProps(props: IProps): IUserProps {
    return {
      bio: new Bio(props.bio),
      day: new Day(props.day),
      followerCount: props.followerCount,
      followingCount: props.followingCount,
      headerImageURL: new HeaderImageURL(props.headerImageURL),
      month: new Month(props.month),
      screenName: new ScreenName(props.screenName),
      userId: new UserId(props.userId),
      userImageURL: new UserImageURL(props.userImageURL),
      userLocation: new UserLocation(props.userLocation),
      userName: new UserName(props.userName),
      website: new Website(props.website),
      year: new Year(props.year),
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
}
