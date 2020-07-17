import UserId from '../../domain/models/User/UserId/UserId';
import { TODO } from '../../util/Util';
import InMemoryUserRepository from '../../inMemory/InMemoryUserRepository';
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

  // todo login 中のユーザーの情報しかもってこれないようにする
  static findUserByUserId(userId: UserId): TODO<'User'> {
    return this.userRepository.getUserByUserId(userId);
  }

  // todo パラメータごとにsaveメソッドを分けるかどうかはバックエンドと相談(とりあえずわけずにいく)
  static updateUserName(userId: UserId, userNameString: string): void {
    const user = UserApplicationService.findUserByUserId(userId);
    const updatedUser = user.updateUserName(userNameString);
    UserApplicationService.userRepository.save(updatedUser);
  }

  static updateBio(userId: UserId, bioString: string): void {
    const user = UserApplicationService.findUserByUserId(userId);
    const updatedUser = user.updateBio(bioString);
    UserApplicationService.userRepository.save(updatedUser);
  }

  static updateWebsite(userId: UserId, websiteString: string): void {
    const user = UserApplicationService.findUserByUserId(userId);
    const updatedUser = user.updateWebsite(websiteString);
    UserApplicationService.userRepository.save(updatedUser);
  }
}
