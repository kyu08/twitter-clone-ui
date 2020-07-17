import UserId from '../../domain/models/User/UserId/UserId';
import { TODO } from '../../util/Util';
import InMemoryUserRepository from '../../inMemory/InMemoryUserRepository';
import { IUser } from '../../domain/models/User/IUser';

// note ここにロジックは書かない。追加のロジックが必要になったらdomain model, domain service に書こう。
// 引数を受け取って new Hoge() するとかならOK
export default class UserApplicationService {
  static readonly userRepository = new InMemoryUserRepository();

  //
  // todo
  //  findUserByUserId
  //  user 登録
  //  ログイン
  //  ログアウト
  //  profile 変更系
  //  follow 系
  //

  static findUserByUserId(userId: UserId): TODO<'User'> {
    return this.userRepository.getUserByUserId(userId);
  }

  static updateUserName(user: IUser, userNameString: string): IUser {
    return user.updateUserName(userNameString);
  }
}
