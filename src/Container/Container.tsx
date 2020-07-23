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
    const screenNameInLocalStorage = userRepository.getScreenNameFromLocalStorage();
    if (!screenNameInLocalStorage) return;
    setIsLogin(true);
    store.set('screenName')(screenNameInLocalStorage);
  }, []);

  return (
    <>
      <RootComponent isLogin={isLogin} setIsLogin={setIsLogin} />
    </>
  );
};
