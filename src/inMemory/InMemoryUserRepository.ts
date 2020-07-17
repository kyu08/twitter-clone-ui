import * as _ from 'lodash';
import UserId from '../domain/models/User/UserId/UserId';
import { IUser } from '../domain/models/User/IUser';
import { TODO } from '../util/Util';
import { IUserRepository } from '../domain/models/User/IUserRepository';
import { inMemoryUserMap } from './InMemoryUsers';
import UserFactory from '../domain/models/User/UserFactory';

export default class InMemoryUserRepository implements IUserRepository {
  private static returnUserMap(): Map<UserId, IUser> {
    const usersJSON = localStorage.getItem('userMap');
    if (!usersJSON) throw Error('There is no userMapInLS');
    const usersJSONParsed = JSON.parse(usersJSON);

    return InMemoryUserRepository.instantiateUsersFromJSON(usersJSONParsed);
  }

  static SetToArray(userMap: Map<UserId, any>): Map<UserId, any> {
    userMap.forEach((user) => {
      // eslint-disable-next-line no-param-reassign
      user.following.following = Array.from(user.following.following);
      user.follower.follower = Array.from(user.follower.follower);
    });

    return userMap;
  }

  // LS に 初期値を set
  static initializeLocalStorage(): void {
    // todo これでできるか自信ない
    const userMapInLocalStorage = localStorage.getItem('userMap');
    if (!userMapInLocalStorage) {
      const userMap = inMemoryUserMap;
      // todo Set オブジェクトも Array にする
      const userMapSetArray = InMemoryUserRepository.SetToArray(userMap);
      const userMapArray = Array.from(userMapSetArray);
      const userMapJSON = JSON.stringify(userMapArray);
      localStorage.setItem('userMap', userMapJSON);
    }
  }

  // LS からもってきた値を User インスタンス化して UserMap をかえす
  private static instantiateUsersFromJSON(
    users: TODO<'usersParsed'>[],
  ): Map<UserId, IUser> {
    const map = new Map();

    users.forEach((u) => {
      const userId = new UserId(u[0].userId);
      const props = UserFactory.createUserPropsFromJSON(u[1]);
      const user = UserFactory.create(props);
      map.set(userId, user);
    });

    return map;
  }

  getUserByUserId(userId: UserId): IUser {
    const userMap = InMemoryUserRepository.returnUserMap();
    let user: IUser;
    userMap.forEach((userInUserMap, userIdInUserMap) => {
      if (userIdInUserMap.userId === userId.userId) user = userInUserMap;
    });

    // todo ここなんとかする
    // @ts-ignore
    if (user === undefined) throw new Error('user undefined');

    return user;
  }

  // NOTE LocalStorage に User 情報(Id, PWはのぞく)を保存する。
  // NOTE ID, PW は別途 LS に保存する？
  save(user: IUser): void {
    const userId = user.getUserId();
    const userMap = InMemoryUserRepository.returnUserMap();
    const userMapCopy = _.cloneDeep(userMap);
    userMapCopy.set(userId, user);
    InMemoryUserRepository.saveUserMap(userMapCopy);
  }

  private static saveUserMap(userMap: Map<UserId, IUser>): void {
    const userMapArray = Array.from(userMap);
    const userMapJSON = JSON.stringify(userMapArray);
    localStorage.setItem('userMap', userMapJSON);
  }
}
