import * as React from 'react';
import { useEffect } from 'react';
import { RootComponent } from './RootComponent';
import Store from '../Store';
import UserApplicationService from '../application/UserApplicationService';
import UserId from '../domain/models/User/UserId/UserId';

export const Container: React.FC = () => {
  const store = Store.useStore();
  const isLogin = store.get('isLogin');

  useEffect(() => {
    const userIdInLocalStorage = UserApplicationService.getUserIdFromLocalStorage();
    if (userIdInLocalStorage === null) return;
    // todo 0824 repository で復元しよう
    const userId = new UserId(userIdInLocalStorage);
    store.set('isLogin')(true);
    store.set('userId')(userId);
    // todo ここで UserDataModel インスタンスを store.set する
  }, []);

  return <RootComponent isLogin={isLogin} />;
};
