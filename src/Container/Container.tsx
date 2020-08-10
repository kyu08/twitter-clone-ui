import * as React from 'react';
import { useEffect } from 'react';
import { RootComponent } from '../components/RootComponent';
import Store from '../Store';
import { IUserRepository } from '../domain/models/User/IUserRepository';
import InMemoryUserRepository from '../inMemory/InMemoryUserRepository';

export const Container: React.FC = () => {
  const store = Store.useStore();
  const [isLogin, setIsLogin] = React.useState<boolean>(false);
  const userRepository: IUserRepository = new InMemoryUserRepository();
  const userId = store.get('userId');

  useEffect(() => {
    const userIdInLocalStorage = userRepository.getUserIdFromLocalStorage();
    if (!userIdInLocalStorage) return;
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
