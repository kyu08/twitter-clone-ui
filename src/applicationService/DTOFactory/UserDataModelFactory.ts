import { IUser } from '../../domain/models/User/IUser';
import { UserDataModel } from '../DTO/UserDataModel';

export class UserDataModelFactory {
  createUserDataModel(user: IUser): UserDataModel {
    return new UserDataModel(user);
  }
}
