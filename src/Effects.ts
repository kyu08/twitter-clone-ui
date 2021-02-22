// eslint-disable-next-line import/no-cycle
import { StoreEffects } from './Store';
import UserApplicationService from './application/UserApplicationService';

const userApplicationService = new UserApplicationService();

const effects: StoreEffects = (store) => {
  store.on('userId').subscribe((userId) => {
    if (!userId) {
      userApplicationService.removeUserIdFromLocalStorage();

      return;
    }
    userApplicationService.setUserIdToLocalStorage(userId);
  });

  return store;
};

export default effects;
