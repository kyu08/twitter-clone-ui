import UserId from '../domain/models/User/UserId/UserId';
// eslint-disable-next-line import/no-cycle
import { UserFactory } from '../domain/models/User/UserFactory';
import ScreenName from '../domain/models/User/Profile/ScreenName';
import { IUserRepository } from '../domain/models/User/IUserRepository';
import { UserDataModel } from './DTO/UserDataModel';
import UserRepository from '../infrastructure/repository/UserRepositoryImpl';

// TODO move to 適切な位置
export type UserPropsDetail = {
  id: string;
  screen_name: string;
  user_name: string;
  header_image_url: string;
  user_image_url: string;
  bio: string;
  birthday: string;
  user_location: string;
  website: string;
  created_at: string;
  tweetCount: number;
  followingMap: [string, string][];
  followerMap: [string, string][];
};

export default class UserApplicationService {
  userRepository: IUserRepository;

  userFactory: UserFactory;

  constructor() {
    this.userRepository = new UserRepository();
    this.userFactory = new UserFactory();
  }

  private toInstanceUserId(userIdString: string): UserId {
    return new UserId(userIdString);
  }

  async getCurrentUser(userId: UserId): Promise<UserDataModel> {
    const userData = await this.userRepository
      .getUserJson(userId)
      .catch((e) => e);
    const userJson = await userData.json();
    const user = this.userFactory.toInstance(userJson);

    return this.userFactory.createUserDataModel(user);
  }

  async getUserByScreenName(screenName: ScreenName): Promise<UserDataModel> {
    const userData = await this.userRepository
      .getUserJsonByScreenName(screenName)
      .catch((e) => e);
    const userJson = await userData.json();
    const user = this.userFactory.toInstance(userJson);

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

  returnUserIdByScreenName(screenName: string): UserId {
    const userIdProp = this.userRepository.returnUserIdByScreenName(screenName);

    return new UserId(userIdProp);
  }

  /* ------------------------------------------- */
  /* methods for authorization                   */
  /* ------------------------------------------- */
  isAuthorized(screenName: string, password: string): boolean {
    return this.userRepository.isAuthorized(screenName, password);
  }

  /* ------------------------------------------- */
  /* methods for using localStorage              */
  /* ------------------------------------------- */
  setUserIdToLocalStorage(userId: UserId): void {
    localStorage.setItem('userId', userId.userId);
  }

  getUserIdFromLocalStorage(): UserId | null {
    const userIdInLocalStorage = localStorage.getItem('userId');
    if (!userIdInLocalStorage) return null;

    return this.toInstanceUserId(userIdInLocalStorage);
  }
}
