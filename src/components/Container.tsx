import * as React from 'react';
import { useEffect } from 'react';
import { RootComponent } from './RootComponent';
import Store from '../Store';
import UserApplicationService from '../application/UserApplicationService';

export const Container: React.FC = () => {
  const store = Store.useStore();
  const isLogin = store.get('isLogin');

  useEffect(() => {
    const userIdInLocalStorage = UserApplicationService.getUserIdFromLocalStorage();
    if (userIdInLocalStorage === null) return;
    store.set('isLogin')(true);
    store.set('userId')(userIdInLocalStorage);
    // todo ここで UserDataModel インスタンスを store.set する
  }, []);

  return <RootComponent isLogin={isLogin} />;
};
