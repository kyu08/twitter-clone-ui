import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { Logo } from './Login/Logo';
import classes from './SignUp.module.css';
import { EnterProfile } from './SignUp/EnterProfile';

type Props = {
  isLogin: boolean;
};

// todo container と presentation にわけよう
export const SignUp: React.FC<Props> = (props) => {
  // ここで state 使って SignUpPage の切り替えを行う
  // ユーザが入力した値は state で保持しておく
  const { isLogin } = props;
  const [userName, setUserName] = React.useState('');
  const [screenName, setScreenName] = React.useState('');
  const [pageNumber, setPageNumber] = React.useState(1);

  const handleUserNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setUserName(e.currentTarget.value);
  };

  const handleScreenNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setScreenName(e.currentTarget.value);
  };

  const next = (e: React.MouseEvent<HTMLInputElement>): void => {
    e.preventDefault();
    console.log(userName, screenName);
    setPageNumber(pageNumber + 1);
  };

  return (
    <>
      {isLogin && <Redirect to="/" />}
      <div className={classes.SignUp}>
        <Logo />
        {pageNumber === 1 && (
          <EnterProfile
            message="アカウントを作成 1/3"
            screenName={screenName}
            userName={userName}
            handleScreenNameChange={handleScreenNameChange}
            handleUserNameChange={handleUserNameChange}
            next={next}
          />
        )}
      </div>
    </>
  );
};
