import * as _ from 'lodash';
import UserId from '../domain/models/User/UserId/UserId';
import { IUser } from '../domain/models/User/IUser';
import { TODO } from '../util/Util';
import { IUserRepository } from '../domain/models/User/IUserRepository';
import { inMemoryUserMap } from './InMemoryUsers';
import UserFactory from '../domain/models/User/UserFactory';
import { ScreenNamePasswordMap } from './InMemoryScreenNamePassword';

export default class InMemoryUserRepository implements IUserRepository {
  private static returnUserMap(): Map<number, IUser> {
    const usersJSON = localStorage.getItem('userMap');
    if (!usersJSON) throw Error('There is no userMapInLS');
    const usersJSONParsed = JSON.parse(usersJSON);

    return InMemoryUserRepository.instantiateUsersFromJSON(usersJSONParsed);
  }

  private static saveUserMap(userMap: Map<number, IUser>): void {
    const userMapJSON = InMemoryUserRepository.MapToArray(userMap);
    localStorage.setItem('userMap', userMapJSON);
  }

  private static MapToArray(userMap: Map<number, IUser>): string {
    const userMapSetArray = InMemoryUserRepository.SetToArray(userMap);
    const userMapArray = Array.from(userMapSetArray);

    return JSON.stringify(userMapArray);
  }

  // LS からもってきた値を User インスタンス化して UserMap をかえす
  private static instantiateUsersFromJSON(
    users: TODO<'usersParsed'>[],
  ): Map<number, IUser> {
    const map = new Map();

    users.forEach((u) => {
      const { userId } = new UserId(u[0]);
      const props = UserFactory.createUserPropsFromJSON(u[1]);

      // todo ここで follow系 Set もいじる(UserId にして new Set()する)
      const user = UserFactory.create(props);
      map.set(userId, user);
    });

    return map;
  }

  static SetToArray(userMap: Map<number, any>): Map<number, any> {
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
      const userMap = inMemoryUserMap;
      const userMapJSON = InMemoryUserRepository.MapToArray(userMap);
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

  // NOTE LocalStorage に User 情報(Id, PWはのぞく)を保存する。
  // NOTE ID, PW は別途 LS に保存する？
  save(user: IUser): void {
    const { userId } = user.getUserId();
    const userMap = InMemoryUserRepository.returnUserMap();
    const userMapCopy = _.cloneDeep(userMap);
    userMapCopy.set(userId, user);
    InMemoryUserRepository.saveUserMap(userMapCopy);
  }

  isAuthorized(screenName: string, password: string): boolean {
    const screenNamePasswordMap = ScreenNamePasswordMap;
    const passwordExpected = screenNamePasswordMap.get(screenName);
    console.log(passwordExpected, password);
    if (passwordExpected === undefined || passwordExpected !== password)
      console.log('invalid access.');

    return false;
    console.log('loged in.');

    return true;
  }
}
