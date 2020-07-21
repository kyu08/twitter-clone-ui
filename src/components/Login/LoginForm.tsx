import * as React from 'react';
import classes from './LoginForm.module.css';
import { InvalidLogin } from './InvalidLogin';

type Props = {
  isInvalidLogin: boolean;
  screenName: string;
  handleScreenNameChange(e: React.ChangeEvent<HTMLInputElement>): void;
  password: string;
  handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>): void;
  login(): void;
};

export const LoginForm: React.FC<Props> = (props) => {
  const {
    isInvalidLogin,
    screenName,
    handleScreenNameChange,
    password,
    handlePasswordChange,
    login,
  } = props;

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
