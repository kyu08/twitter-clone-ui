import UserId from '../../domain/models/User/UserId/UserId';
import { inMemoryUserMap } from '../../inMemory/InMemoryUsers';
import { ScreenNamePasswordMap } from '../../inMemory/InMemoryScreenNamePassword';
import ScreenName from '../../domain/models/User/Profile/ScreenName';
import { IUser } from '../../domain/models/User/IUser';
import { IUserRepository } from '../../domain/repository/user/IUserRepository';
import { hostURL } from '../util/util';

export default class UserRepositoryImpl implements IUserRepository {
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
}
