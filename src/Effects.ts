// eslint-disable-next-line import/no-cycle
import { StoreEffects } from './Store';
import { IUserRepository } from './domain/models/User/IUserRepository';
import InMemoryUserRepository from './inMemory/InMemoryUserRepository';

const userRepository: IUserRepository = new InMemoryUserRepository();

const effects: StoreEffects = (store) => {
  store.on('screenName').subscribe((screenName) => {
    if (!screenName) {
      userRepository.removeScreenNameFromLocalStorage();

      return;
    }
    userRepository.setScreenNameToLocalStorage(screenName);
  });

  return store;
};

export default effects;
