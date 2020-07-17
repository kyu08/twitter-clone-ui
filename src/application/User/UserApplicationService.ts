import UserId from '../../domain/models/User/UserId/UserId';
import { TODO } from '../../util/Util';
import InMemoryUserRepository from '../../inMemory/InMemoryUserRepository';
import { IUser } from '../../domain/models/User/IUser';
import { IUserRepository } from '../../domain/models/User/IUserRepository';

// note ここにロジックは書かない。追加のロジックが必要になったらdomain model, domain service に書こう。
// 引数を受け取って new Hoge() するとかならOK
export default class UserApplicationService {
  // todo InMemory <-> Production でさしかえる
  static readonly userRepository: IUserRepository = new InMemoryUserRepository();

  //
  // todo
  //  findUserByUserId
  //  user 登録
  //  ログイン
  //  ログアウト
  //  profile 変更系
  //  follow 系
  //

  // signUp(userProps: any): any {
  //   const props = UserFactory.createProps(userProps);
  //   const user = UserFactory.create(props);
  //   UserApplicationService.userRepository.save(user);
  // }

  static findUserByUserId(userId: UserId): TODO<'User'> {
    return this.userRepository.getUserByUserId(userId);
  }

  static updateUserName(userId: UserId, userNameString: string): IUser {
    const user = UserApplicationService.findUserByUserId(userId);
    // const updatedUser = user.updateUserName(userNameString);
    // todo パラメータごとにsaveメソッドを分けるかどうかはバックエンドと相談(とりあえずわけずにいく)
    // UserApplicationService.userRepository.save(updatedUser);

    return user.updateUserName(userNameString);
  }

  static updateBio(userId: UserId, bioString: string): IUser {
    const user = UserApplicationService.findUserByUserId(userId);
    const updatedUser = user.updateBio(bioString);
    // UserApplicationService.userRepository.save(updatedUser);

    return updatedUser;
  }
}
