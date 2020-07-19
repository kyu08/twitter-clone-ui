import * as React from 'react';
import classes from './InvalidLogin.module.css';

export const InvalidLogin: React.FC<{}> = () => {
  return (
    <div className={classes.InvalidLogin}>
      <span>
        入力されたユーザー名やパスワードが正しくありません。確認してからやりなおしてください。
      </span>
    </div>
  );
};
