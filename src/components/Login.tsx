import * as React from 'react';
import classes from './Login.module.css';
import { Logo } from './Login/Logo';
import { Message } from './Login/Message';
import { LoginForm } from './Login/LoginForm';

export const Login: React.FC<{}> = () => {
  return (
    <div className={classes.Login}>
      <Logo />
      <Message />
      <LoginForm />
    </div>
  );
};
