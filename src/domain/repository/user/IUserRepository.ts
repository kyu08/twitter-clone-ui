import UserId from '../../models/User/UserId/UserId';
import ScreenName from '../../models/User/Profile/ScreenName';

export interface IUserRepository {
  isAuthorized(screenName: string, password: string): boolean;
  setUserIdToLocalStorage(userId: UserId): void;
  getUserIdFromLocalStorage(): UserId | null;
  removeUserIdFromLocalStorage(): void;
  returnUserIdByScreenName(screenName: string): string;
  toInstanceUserId(userIdString: string): UserId;
  getUserJson(userId: UserId): Promise<Response>;
  getUserJsonByScreenName(screenName: ScreenName): Promise<Response>;
}
