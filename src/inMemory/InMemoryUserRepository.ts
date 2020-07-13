import { User } from '../domain/models/User/User';
import UserId from '../domain/models/User/UserId/UserId';
import { IUser } from '../domain/models/User/IUser';
import { TODO } from '../util/Util';
import { IUserRepository } from '../domain/models/User/IUserRepository';
import { inMemoryUsers } from './InMemoryUsers';

export default class InMemoryUserRepository implements IUserRepository {
  getUserByUserId(userId: UserId): IUser {
    const props = inMemoryUsers.find((e) => e.userId.userId === userId.userId);
    if (props === undefined) throw new Error('user undefined');

    return new User(props);
  }

  // update(
  //   user: IUser,
  // ): TODO<
  //   'httpResponseBodyかなあ？いったんIUserをreturnする仕様でいいかな...'
  // > {
  //   // ここに具体的なAPI fetch
  //   // 失敗した場合は container component から 失敗フラグを渡す？(optional stateにしといたやつ？)
  // }
}
