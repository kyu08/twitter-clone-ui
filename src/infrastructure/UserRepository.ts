import UserId from '../domain/models/User/UserId/UserId';
import { hostURL } from '../util/Util';
// eslint-disable-next-line import/no-cycle
import { IUserRepository } from '../domain/models/User/IUserRepository';
import { inMemoryUserMap } from '../inMemory/InMemoryUsers';
import { ScreenNamePasswordMap } from '../inMemory/InMemoryScreenNamePassword';
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
import { IUser } from '../domain/models/User/IUser';

export type UserPropsDetail = {
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
  tweetCount: number;
  followingMap: [string, string][];
  followerMap: [string, string][];
};

export default class UserRepository implements IUserRepository {
  toInstanceUserId(userIdString: string): UserId {
    return new UserId(userIdString);
  }

  getUserJson(userId: UserId): Promise<Response> {
    const userIdString = userId.userId;

    return fetch(`${hostURL}/user/userId/${userIdString}/full`, {
      mode: 'cors',
    });
  }

  getUserJsonByScreenName(screenName: ScreenName): Promise<Response> {
    const screenNameString = screenName.screenName;

    return fetch(
      `${hostURL}/user/screenName/full?screenName=${screenNameString}`,
      {
        mode: 'cors',
      },
    );
  }

  // todo 本当はここに認証ロジックおくべきではないんだけど、まだ仕様が未定なのでいったんここに置いておく
  returnUserIdByScreenName(screenName: string): string {
    let userIdFound;
    inMemoryUserMap.forEach((user: IUser, userId: string) => {
      if (user.getScreenName().screenName === screenName) {
        userIdFound = userId;
      }
    });
    if (userIdFound) {
      return userIdFound;
    }
    throw new Error('no user has this screenName.');
  }

  // todo 本当はここに認証ロジックおくべきではないんだけど、まだ仕様が未定なのでいったんここに置いておく
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

  // user を復元(インスタンス化)
  // todo これはやっぱり factory でやるべきだと思う
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
    tweetCount,
    followerMap: followerMapProp,
    followingMap: followingMapProp,
  }: UserPropsDetail): User {
    const profileProps = {
      screenName: new ScreenName(screenName),
      userName: new UserName(userName),
      headerImageURL: new HeaderImageURL(headerImageURL),
      userImageURL: new UserImageURL(userImageURL),
      bio: new Bio(bio),
      userLocation: new UserLocation(userLocation),
      website: new Website(website),
    };
    if (birthdayProp) {
      const date = new Date(birthdayProp);
      const year = new Year(date.getFullYear());
      const month = new Month(date.getMonth() + 1);
      const day = new Day(date.getDate());
      Object.assign(profileProps, {
        birthday: new Birthday({ year, month, day }),
      });
    }
    const profile = new Profile(profileProps);

    // todo refactor
    const followingMapPropInstance: [string, Date][] = followingMapProp
      ? followingMapProp.map((followInfo) => {
          return [followInfo[0], new Date(followInfo[1])];
        })
      : [];
    const followerMapPropInstance: [string, Date][] = followerMapProp
      ? followingMapProp.map((followInfo) => {
          return [followInfo[0], new Date(followInfo[1])];
        })
      : [];
    const followingMap = new Map(followingMapPropInstance);
    const followerMap = new Map(followerMapPropInstance);

    return new User({
      profile,
      followerCount,
      followingCount,
      tweetCount,
      userId: new UserId(userId),
      followingMap,
      followerMap,
    });
  }
}
