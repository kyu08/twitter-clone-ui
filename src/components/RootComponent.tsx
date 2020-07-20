import * as React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import classes from './RootComponent.module.css';
import Store from '../Store';

export const RootComponent: React.FC = () => {
  const store = Store.useStore();

  const [isLogin, setIsLogin] = React.useState<boolean>(false);

  useEffect(() => {
    // todo LS は repo 経由でやる
    const screenNameInLocalStorage = localStorage.getItem('screenName');
    if (screenNameInLocalStorage) {
      setIsLogin(true);
      store.set('screenName')(screenNameInLocalStorage);
    }
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
