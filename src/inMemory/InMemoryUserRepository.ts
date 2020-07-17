import { User } from '../domain/models/User/User';
import UserId from '../domain/models/User/UserId/UserId';
import { IUser } from '../domain/models/User/IUser';
import { TODO } from '../util/Util';
import { IUserRepository } from '../domain/models/User/IUserRepository';
import { inMemoryUserMap } from './InMemoryUsers';
import UserFactory from '../domain/models/User/UserFactory';

export default class InMemoryUserRepository implements IUserRepository {
  // LS に 初期値を set
  static initializeLocalStorage(): void {
    // todo これでできるか自信ない
    const userMapInLocalStorage = localStorage.getItem('userMap');
    if (!userMapInLocalStorage) {
      const userMap = inMemoryUserMap;
      const userMapArray = Array.from(userMap);
      const userMapJSON = JSON.stringify(userMapArray);
      localStorage.setItem('userMap', userMapJSON);
    }
  }

  // LS からもってきた値を User インスタンス化して UserMap をかえす
  static instantiateUsersFromJSON(users: any[]): Map<UserId, IUser> {
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
    const usersJSON = localStorage.getItem('userMap');
    if (!usersJSON) throw Error('There is no userMapInLS');
    const usersJSONParsed = JSON.parse(usersJSON);
    const userMap = InMemoryUserRepository.instantiateUsersFromJSON(
      usersJSONParsed,
    );
    console.log(userMap);
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
  save(
    user: IUser,
  ): TODO<
    'httpResponseBodyかなあ？いったんIUserをreturnする仕様でいいかな...'
  > {
    // ここに具体的なAPI fetch
    // 失敗した場合は container component から 失敗フラグを渡す？(optional stateにしといたやつ？)
    // localStorage.setItem('User', user);
    // localStorage.setItem('UserMap', userMap);
  }
}
