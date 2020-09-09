import UserId from '../domain/models/User/UserId/UserId';
import UserRepository from '../infrastructure/UserRepository';
import { IUserRepository } from '../domain/models/User/IUserRepository';
import { UserDataModel } from '../infrastructure/UserDataModel';
import { UserFactory } from '../domain/models/User/UserFactory';
import ScreenName from '../domain/models/User/Profile/ScreenName';

// note ここにロジックは書かない。追加のロジックが必要になったらdomain model, domain service に書こう。
// 引数を受け取って new Hoge() するとかならOK
export default class UserApplicationService {
  userRepository: IUserRepository;

  userFactory: UserFactory;

  constructor() {
    this.userRepository = new UserRepository();
    this.userFactory = new UserFactory();
  }

  getUserIdFromLocalStorage(): UserId | null {
    return this.userRepository.getUserIdFromLocalStorage();
  }

  async getCurrentUser(userId: UserId): Promise<UserDataModel> {
    const userData = await this.userRepository
      .getUserJson(userId)
      .catch((e) => e);
    const userJson = await userData.json();
    const user = this.userRepository.toInstance(userJson);

    return this.userFactory.createUserDataModel(user);
  }

  async getUserByScreenName(screenName: ScreenName): Promise<UserDataModel> {
    const userData = await this.userRepository
      .getUserJsonByScreenName(screenName)
      .catch((e) => e);
    const userJson = await userData.json();
    const user = this.userRepository.toInstance(userJson);

    return this.userFactory.createUserDataModel(user);
  }

  getFollowerCount(userDataModel: UserDataModel): number {
    const user = this.userFactory.convertUserDataModelToUser(userDataModel);

    return user.getFollowerCount();
  }

  getFollowingCount(userDataModel: UserDataModel): number {
    const user = this.userFactory.convertUserDataModelToUser(userDataModel);

    return user.getFollowingCount();
  }

  isFollowed(
    currentUser: UserDataModel,
    userIndicating: UserDataModel,
  ): boolean {
    const user = this.userFactory.convertUserDataModelToUser(currentUser);

    return user.followerMap.get(userIndicating.userId) !== undefined;
  }

  isFollowing(
    currentUser: UserDataModel,
    userIndicating: UserDataModel,
  ): boolean {
    const user = this.userFactory.convertUserDataModelToUser(currentUser);

    return user.followingMap.get(userIndicating.userId) !== undefined;
  }

  isAuthorized(screenName: string, password: string): boolean {
    return this.userRepository.isAuthorized(screenName, password);
  }

  returnUserIdByScreenName(screenName: string): UserId {
    const userIdProp = this.userRepository.returnUserIdByScreenName(screenName);

    return new UserId(userIdProp);
  }
}
