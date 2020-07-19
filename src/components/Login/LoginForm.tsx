import * as React from 'react';
import classes from './LoginForm.module.css';
import { InvalidLogin } from './InvalidLogin';

export const LoginForm: React.FC<{}> = () => {
  const [userId, setUserId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isInvalidLogin, setIsInvalidLogin] = React.useState(false);

  const authorize = (id: string, pw: string): boolean => {
    // todo repository にといあわせ？
    console.log(id, pw);

    return false;
  };

  const login = () => {
    // todo idpw があってるかサーバに問合せ
    const isAuthorized = authorize(userId, password);

    // なんか書いた方がいいおまじないがあったけど忘れた
    if (isAuthorized) {
      // todo LS に UserId を set
      localStorage.setItem('userId', 'hogehoge');
      window.location.href = '/home';

      return;
    }
    // todo ID or PW が間違っています を表示
    setIsInvalidLogin(true);
  };

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.currentTarget.value);
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
          value={userId}
          className={classes.LoginInput}
          onChange={(e) => handleUserIdChange(e)}
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
