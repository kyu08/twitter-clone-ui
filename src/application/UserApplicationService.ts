import UserId from '../domain/models/User/UserId/UserId';
import { UserDataModel } from '../infrastructure/UserDataModel';
// eslint-disable-next-line import/no-cycle
import { UserFactory } from '../domain/models/User/UserFactory';
import ScreenName from '../domain/models/User/Profile/ScreenName';
import { hostURL } from '../util/Util';
import { ScreenNamePasswordMap } from '../inMemory/InMemoryScreenNamePassword';
import { inMemoryUserMap } from '../inMemory/InMemoryUsers';
import { IUser } from '../domain/models/User/IUser';

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

const toInstanceUserId = (userIdString: string): UserId =>
  new UserId(userIdString);

const getUserJson = (userId: UserId): Promise<Response> => {
  const userIdString = userId.userId;

  return fetch(`${hostURL}/user/userId/${userIdString}/full`, {
    mode: 'cors',
  });
};

const getUserJsonByScreenName = (screenName: ScreenName): Promise<Response> => {
  const screenNameString = screenName.screenName;

  return fetch(
    `${hostURL}/user/screenName/full?screenName=${screenNameString}`,
    {
      mode: 'cors',
    },
  );
};

export default class UserApplicationService {
  userFactory: UserFactory;

  constructor() {
    this.userFactory = new UserFactory();
  }

  getUserIdFromLocalStorage(): UserId | null {
    const userIdInLocalStorage = localStorage.getItem('userId');
    if (!userIdInLocalStorage) return null;

    return toInstanceUserId(userIdInLocalStorage);
  }

  async getCurrentUser(userId: UserId): Promise<UserDataModel> {
    const userData = await getUserJson(userId).catch((e) => e);
    const userJson = await userData.json();
    const user = this.userFactory.toInstance(userJson);

    return this.userFactory.createUserDataModel(user);
  }

  async getUserByScreenName(screenName: ScreenName): Promise<UserDataModel> {
    const userData = await getUserJsonByScreenName(screenName).catch((e) => e);
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

  isAuthorized(screenName: string, password: string): boolean {
    const passwordExpected = ScreenNamePasswordMap.get(screenName);

    if (passwordExpected === undefined || passwordExpected !== password) {
      console.log('invalid access.');

      return false;
    }
    console.log('logged in.');

    return true;
  }

  returnUserIdByScreenName(screenName: string): UserId {
    let userIdFound;
    inMemoryUserMap.forEach((user: IUser, userId: string) => {
      if (user.getScreenName().screenName === screenName) {
        userIdFound = userId;
      }
    });
    if (!userIdFound) {
      throw new Error('no user has this screenName.');
    }

    return new UserId(userIdFound);
  }

  setUserIdToLocalStorage(userId: UserId): void {
    localStorage.setItem('userId', userId.userId);
  }

  removeUserIdFromLocalStorage(): void {
    localStorage.removeItem('userId');
  }
}
