import * as React from 'react';
import classes from './LoginForm.module.css';
import { InvalidLogin } from './InvalidLogin';
import UserApplicationService from '../../application/User/UserApplicationService';
import Store from '../../Store';

export const LoginForm: React.FC<{}> = () => {
  const [screenName, setScreenName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isInvalidLogin, setIsInvalidLogin] = React.useState(false);
  const store = Store.useStore();

  const authorize = (
    screenNameEntered: string,
    passwordEntered: string,
  ): boolean => {
    return UserApplicationService.isAuthorized(
      screenNameEntered,
      passwordEntered,
    );
  };

  const login = () => {
    const isAuthorized = authorize(screenName, password);
    if (isAuthorized) {
      // todo これは コールバック関数でやる
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
    <>
      {isInvalidLogin && <InvalidLogin />}
      <form>
        <div className={classes.LoginForm}>
          <div className={classes.InputLabel}>ユーザ名</div>
          <input
            type="text"
            value={screenName}
            className={classes.LoginInput}
            onChange={(e) => handleScreenNameChange(e)}
          />
        </div>
        <div className={classes.LoginForm}>
          <div className={classes.InputLabel}>パスワード</div>
          <input
            type="password"
            value={password}
            className={classes.LoginInput}
            onChange={(e) => handlePasswordChange(e)}
          />
        </div>
        <div className={classes.ButtonContainer}>
          <input
            type="submit"
            className={classes.SubmitButton}
            value="ログイン"
            onClick={() => login()}
          />
        </div>
      </form>
    </>
  );
};
