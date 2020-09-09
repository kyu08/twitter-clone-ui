import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { Logo } from './Login/Logo';
import { Message } from './Login/Message';
import { LoginForm } from './Login/LoginForm';
import UserApplicationService from '../application/UserApplicationService';
import Store from '../Store';
import { AlertMessage } from './Login/AlertMessage';

export const LoginContainer: React.FC = () => {
  const store = Store.useStore();
  const isLogin = store.get('isLogin');

  const [screenName, setScreenName] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [isInvalidLogin, setIsInvalidLogin] = React.useState<boolean>(false);
  const userApplicationService = new UserApplicationService();

  const authorize = (screenNameAuth: string, passwordAuth: string): boolean => {
    return userApplicationService.isAuthorized(screenNameAuth, passwordAuth);
  };

  const login = (): void => {
    const isAuthorized = authorize(screenName, password);
    const userId = userApplicationService.returnUserIdByScreenName(screenName);

    if (isAuthorized) {
      store.set('userId')(userId);
      store.set('isLogin')(true);

      return;
    }
    setIsInvalidLogin(true);
  };

  const handleChangeScreenName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScreenName(e.currentTarget.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <>
      {isLogin && <Redirect to="/" />}
      <Logo />
      <Message message="Twitterにログイン" />
      {isInvalidLogin && (
        <AlertMessage alertMessage="入力されたユーザー名やパスワードが正しくありません。確認してからやりなおしてください。" />
      )}
      <LoginForm
        login={login}
        screenName={screenName}
        handleChangeScreenName={handleChangeScreenName}
        password={password}
        handleChangePassword={handleChangePassword}
      />
    </>
  );
};
