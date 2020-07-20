import * as React from 'react';
import classes from './LoginForm.module.css';
import { InvalidLogin } from './InvalidLogin';

export const LoginForm: React.FC<{}> = () => {
  const [screenName, setScreenName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isInvalidLogin, setIsInvalidLogin] = React.useState(false);

  const authorize = (id: string, pw: string): boolean => {
    // todo repository にといあわせ
    console.log(id, pw);

    return true;
  };

  const login = () => {
    // todo idpw があってるかサーバに問合せ
    const isAuthorized = authorize(screenName, password);

    if (isAuthorized) {
      // todo LS に set するのも, global state に set するのも Container component からもらったコールバック関数を使うようにしよう
      // todo repository 経由でアクセス
      // todo effect を使うと set の変更内容と LS を同期させることができる？？
      localStorage.setItem('screenName', screenName);
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
      <div className={classes.LoginForm}>
        {/* todo 外部に送信する場合はformタグの方が良い？ */}
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
    </>
  );
};
