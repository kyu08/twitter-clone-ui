import UserId from './UserId/UserId';
import { IUser } from './IUser';

export interface IUserRepository {
  getUserByUserId(userId: UserId): IUser;
  save(user: IUser): void;
  isAuthorized(screenName: string, password: string): boolean;
  setUserIdToLocalStorage(userId: UserId): void;
  getUserIdFromLocalStorage(): string | null;
  removeUserIdFromLocalStorage(): void;
  returnUserIdByScreenName(screenName: string): string;
  toInstanceUserId(userIdString: string): UserId;
}
