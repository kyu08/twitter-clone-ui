import UserId from './UserId/UserId';
import ScreenName from './Profile/ScreenName';

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
