import UserId from './UserId/UserId';
// import { IUser } from './IUser';
import { User } from './User';
// eslint-disable-next-line import/no-cycle
import { userFull } from '../../../infrastructure/UserRepository';

export interface IUserRepository {
  // save(user: IUser): void;
  isAuthorized(screenName: string, password: string): boolean;
  setUserIdToLocalStorage(userId: UserId): void;
  getUserIdFromLocalStorage(): UserId | null;
  removeUserIdFromLocalStorage(): void;
  returnUserIdByScreenName(screenName: string): string;
  toInstanceUserId(userIdString: string): UserId;
  getUserJson(userId: UserId): Promise<Response>;
  toInstance(props: userFull): User;
}
