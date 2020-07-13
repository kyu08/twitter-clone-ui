import UserId from './UserId/UserId';
import { IUser } from './IUser';
import { TODO } from '../../../util/Util';

export interface IUserRepository {
  getUserByUserId(userId: UserId): IUser;
  // update(user: IUser): TODO<'httpResponseBody'>;
}
