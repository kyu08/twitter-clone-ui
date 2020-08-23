import UserId from '../domain/models/User/UserId/UserId';
import { TODO } from '../util/Util';
import InMemoryUserRepository from '../inMemory/InMemoryUserRepository';
import { IUserRepository } from '../domain/models/User/IUserRepository';
import { BirthdayProps } from '../domain/models/User/Profile/Birthday';

// note ここにロジックは書かない。追加のロジックが必要になったらdomain model, domain service に書こう。
// 引数を受け取って new Hoge() するとかならOK
export default class UserApplicationService {
  static readonly userRepository: IUserRepository = new InMemoryUserRepository();

  static getUserIdFromLocalStorage(): string | null {
    return this.userRepository.getUserIdFromLocalStorage();
  }

  static toInstanceUserId(userIdString: string): UserId {
    return this.userRepository.toInstanceUserId(userIdString);
  }

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

  static updateUserLocation(userId: UserId, userLocationString: string): void {
    const user = UserApplicationService.findUserByUserId(userId);
    const updatedUser = user.updateUserLocation(userLocationString);
    UserApplicationService.userRepository.save(updatedUser);
  }

  static updateBirthday(userId: UserId, birthdayProps: BirthdayProps): void {
    const user = UserApplicationService.findUserByUserId(userId);
    const updatedUser = user.updateBirthday(birthdayProps);
    UserApplicationService.userRepository.save(updatedUser);
  }

  static isAuthorized(screenName: string, password: string): boolean {
    return this.userRepository.isAuthorized(screenName, password);
  }

  static returnUserIdByScreenName(screenName: string): UserId {
    const userIdProp = UserApplicationService.userRepository.returnUserIdByScreenName(
      screenName,
    );

    return new UserId(userIdProp);
  }
}
