import UserId from '../domain/models/User/UserId/UserId';
import UserRepository from '../infrastructure/UserRepository';
import { IUserRepository } from '../domain/models/User/IUserRepository';
import { UserDataModel } from '../infrastructure/UserDataModel';
import { UserFactory } from '../domain/models/User/UserFactory';

// note ここにロジックは書かない。追加のロジックが必要になったらdomain model, domain service に書こう。
// 引数を受け取って new Hoge() するとかならOK
export default class UserApplicationService {
  static readonly userRepository: IUserRepository = new UserRepository();

  static readonly userFactory = new UserFactory();

  static getUserIdFromLocalStorage(): UserId | null {
    return UserApplicationService.userRepository.getUserIdFromLocalStorage();
  }

  static async getCurrentUser(userId: UserId): Promise<UserDataModel> {
    const userData = await this.userRepository
      .getUserJson(userId)
      .catch((e) => e);
    const userJson = await userData.json();
    const user = this.userRepository.toInstance(userJson);

    return this.userFactory.createUserDataModel(user);
  }

  // static updateUserName(user: IUser, userNameString: string): void {
  //   const updatedUser = user.updateUserName(userNameString);
  //   UserApplicationService.userRepository.save(updatedUser);
  // }
  //
  // static updateBio(user: IUser, bioString: string): void {
  //   const updatedUser = user.updateBio(bioString);
  //   UserApplicationService.userRepository.save(updatedUser);
  // }
  //
  // static updateWebsite(user: IUser, websiteString: string): void {
  //   const updatedUser = user.updateWebsite(websiteString);
  //   UserApplicationService.userRepository.save(updatedUser);
  // }
  //
  // static updateUserLocation(user: IUser, userLocationString: string): void {
  //   const updatedUser = user.updateUserLocation(userLocationString);
  //   UserApplicationService.userRepository.save(updatedUser);
  // }
  //
  // static updateBirthday(user: IUser, birthdayProps: BirthdayProps): void {
  //   const updatedUser = user.updateBirthday(birthdayProps);
  //   UserApplicationService.userRepository.save(updatedUser);
  // }

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
