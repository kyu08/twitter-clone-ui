import { UserDataModel } from '../../../infrastructure/UserDataModel';
import { IUser } from './IUser';

export class UserFactory {
  createUserDataModel(user: IUser): UserDataModel {
    return new UserDataModel(user);
  }
}
