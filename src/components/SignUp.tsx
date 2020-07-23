import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { Logo } from './Login/Logo';
import { Message } from './Login/Message';

type Props = {
  isLogin: boolean;
};

export const SignUp: React.FC<Props> = (props) => {
  // ここで SignUpPage の切り替えを行う
  const { isLogin } = props;

  return (
    <>
      {isLogin && <Redirect to="/" />}
      <Logo />
      <Message message="新規登録" />
    </>
  );
};
