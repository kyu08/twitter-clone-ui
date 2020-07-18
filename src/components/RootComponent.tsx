import * as React from 'react';
import { useEffect } from 'react';
import { Home } from './Home';
import { Login } from './Login';

export const RootComponent: React.FC<{}> = () => {
  const [isLogin, setIsLogin] = React.useState<boolean>(false);
  useEffect(() => {
    const userIdInLocalStorage = localStorage.getItem('userId');
    if (userIdInLocalStorage) setIsLogin(true);
  }, []);

  return <>{isLogin ? <Home /> : <Login />}</>;
};
