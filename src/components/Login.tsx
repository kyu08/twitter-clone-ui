import * as React from 'react';
import classes from './Login.module.css';
import { Logo } from './Login/Logo';
import { Message } from './Login/Message';
import { LoginForm } from './Login/LoginForm';
import UserApplicationService from '../application/User/UserApplicationService';
import Store from '../Store';

export const Login: React.FC<{}> = () => {
  const [screenName, setScreenName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isInvalidLogin, setIsInvalidLogin] = React.useState(false);
  const store = Store.useStore();

  const authorize = (screenNameAuth: string, passwordAuth: string): boolean => {
    return UserApplicationService.isAuthorized(screenNameAuth, passwordAuth);
  };

  const login = () => {
    const isAuthorized = authorize(screenName, password);
    if (isAuthorized) {
      store.set('screenName')(screenName);
      window.location.href = '/home';

      return;
    }
    setIsInvalidLogin(true);
  };

  const handleScreenNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScreenName(e.currentTarget.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <div className={classes.Login}>
      <Logo />
      <Message />
      <LoginForm
        login={login}
        isInvalidLogin={isInvalidLogin}
        screenName={screenName}
        handleScreenNameChange={handleScreenNameChange}
        password={password}
        handlePasswordChange={handlePasswordChange}
      />
    </div>
  );
};
