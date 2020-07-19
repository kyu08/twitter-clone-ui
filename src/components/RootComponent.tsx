import * as React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import classes from './RootComponent.module.css';

export const RootComponent: React.FC<{}> = () => {
  const [isLogin, setIsLogin] = React.useState<boolean>(false);
  useEffect(() => {
    const userIdInLocalStorage = localStorage.getItem('userId');
    if (userIdInLocalStorage) setIsLogin(true);
  }, []);

  return (
    <div className={classes.RootComponent}>
      <BrowserRouter>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </BrowserRouter>
      {isLogin ? <Home /> : <Login />}
    </div>
  );
};
