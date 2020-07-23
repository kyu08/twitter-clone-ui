import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { Logo } from './Login/Logo';
import { Message } from './Login/Message';

type Props = {
  isLogin: boolean;
};

export const SignUp: React.FC<Props> = (props) => {
  // ここで state 使って SignUpPage の切り替えを行う
  // ユーザが入力した値は state で保持しておく
  const { isLogin } = props;

  return (
    <>
      {isLogin && <Redirect to="/" />}
      <Logo />
      <Message message="新規登録" />
    </>
  );
};
