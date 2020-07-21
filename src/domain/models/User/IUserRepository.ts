import UserId from './UserId/UserId';
import { IUser } from './IUser';

export interface IUserRepository {
  getUserByUserId(userId: UserId): IUser;
  save(user: IUser): void;
  isAuthorized(screenName: string, password: string): boolean;
  setScreenNameToLocalStorage(screenName: string): void;
  getScreenNameFromLocalStorage(): string | null;
  removeScreenNameFromLocalStorage(): void;
}
