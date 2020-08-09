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

  useEffect(() => {
    const userIdInLocalStorage = userRepository.getUserIdFromLocalStorage();
    if (!userIdInLocalStorage) return;
    setIsLogin(true);
    store.set('userId')(userIdInLocalStorage);
  }, []);

  return (
    <>
      <RootComponent isLogin={isLogin} setIsLogin={setIsLogin} />
    </>
  );
};
