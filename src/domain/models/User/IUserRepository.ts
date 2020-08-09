import UserId from './UserId/UserId';
import { IUser } from './IUser';

export interface IUserRepository {
  getUserByUserId(userId: UserId): IUser;
  save(user: IUser): void;
  isAuthorized(screenName: string, password: string): boolean;
  setUserIdToLocalStorage(screenName: string): void;
  getUserIdFromLocalStorage(): string | null;
  removeUserIdFromLocalStorage(): void;
  returnUserIdByScreenName(screenName: string): number;
}
