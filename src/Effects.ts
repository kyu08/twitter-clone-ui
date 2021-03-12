// eslint-disable-next-line import/no-cycle
import { StoreEffects } from './Store';
import { IUserRepository } from './domain/repository/user/IUserRepository';
import UserRepository from './infrastructure/repository/UserRepositoryImpl';

const userRepository: IUserRepository = new UserRepository();

const effects: StoreEffects = (store) => {
  store.on('userId').subscribe((userId) => {
    if (!userId) {
      userRepository.removeUserIdFromLocalStorage();

      return;
    }
    userRepository.setUserIdToLocalStorage(userId);
  });

  return store;
};

export default effects;
