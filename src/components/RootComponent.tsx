import * as React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import classes from './RootComponent.module.css';
import Store from '../Store';
import { IUserRepository } from '../domain/models/User/IUserRepository';
import InMemoryUserRepository from '../inMemory/InMemoryUserRepository';

export const RootComponent: React.FC = () => {
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
    <div className={classes.RootComponent}>
      <BrowserRouter>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        {isLogin ? <Redirect to="/home" /> : <Redirect to="/login" />}
      </BrowserRouter>
    </div>
  );
};
