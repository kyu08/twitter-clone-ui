import * as React from 'react';
import { useEffect } from 'react';
import { RootComponent } from './RootComponent';
import Store from '../Store';
import UserApplicationService from '../application/UserApplicationService';

export const Container: React.FC = () => {
  const store = Store.useStore();
  const [isLogin, setIsLogin] = React.useState<boolean>(false);
  const userId = store.get('userId');

  useEffect(() => {
    const userIdInLocalStorage = UserApplicationService.getUserIdFromLocalStorage();
    if (userIdInLocalStorage === null) return;
    setIsLogin(true);
    store.set('userId')(userIdInLocalStorage);
  }, []);

  return (
    <>
      {userId ? (
        <RootComponent
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          userId={userId}
        />
      ) : (
        <RootComponent isLogin={isLogin} setIsLogin={setIsLogin} />
      )}
    </>
  );
};
