import * as React from 'react';
import { useEffect } from 'react';
import { RoutingComponent } from './RoutingComponent';
import Store from '../Store';
import UserApplicationService from '../applicationService/UserApplicationService';

export const Container: React.FC = () => {
  const store = Store.useStore();
  const isLogin = store.get('isLogin');
  const userApplicationService = new UserApplicationService();

  useEffect(() => {
    (async () => {
      const userIdInLocalStorage = userApplicationService.getUserIdFromLocalStorage();
      if (userIdInLocalStorage === null) return;
      store.set('isLogin')(true);
      store.set('userId')(userIdInLocalStorage);
      const userDataModel = await userApplicationService
        .getCurrentUser(userIdInLocalStorage)
        .catch((e) => e);
      store.set('userDataModel')(userDataModel);
    })();
  }, []);

  return <RoutingComponent isLogin={isLogin} />;
};
