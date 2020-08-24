import * as React from 'react';
import { useEffect } from 'react';
import { RootComponent } from './RootComponent';
import Store from '../Store';
import UserApplicationService from '../application/UserApplicationService';

export const Container: React.FC = () => {
  const store = Store.useStore();
  const isLogin = store.get('isLogin');

  useEffect(() => {
    (async () => {
      const userIdInLocalStorage = UserApplicationService.getUserIdFromLocalStorage();
      if (userIdInLocalStorage === null) return;
      store.set('isLogin')(true);
      store.set('userId')(userIdInLocalStorage);
      const userDataModel = await UserApplicationService.getCurrentUser(
        userIdInLocalStorage,
      ).catch((e) => e);
      store.set('userDataModel')(userDataModel);
    })();
  }, []);

  return <RootComponent isLogin={isLogin} />;
};
