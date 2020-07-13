import UserId from '../../domain/models/User/UserId/UserId';
import { TODO } from '../../util/Util';
import InMemoryUserRepository from '../../inMemory/InMemoryUserRepository';

// note ここにロジックは書かない。追加のロジックが必要になったらdomain model, domain service に書こう。
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

  static findUserByUserId(userId: UserId): TODO<'うまくいったのかどうか'> {
    return this.userRepository.getUserByUserId(userId);
  }
}
