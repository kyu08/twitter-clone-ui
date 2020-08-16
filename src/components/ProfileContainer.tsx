import * as React from 'react';
import { Redirect } from 'react-router-dom';
import classes from './ProfileContainer.module.css';
import { Header } from './Home/Common/Header';

type Props = {
  isLogin: boolean;
};

// todo ひととおりできたら presentation component として view 部分を切り出していく
export const ProfileContainer: React.FC<Props> = (props) => {
  const { isLogin } = props;

  return (
    <>
      {!isLogin && <Redirect to="/" />}
      <Header />
      <div className={classes.HeaderImage} />
      this is ProfileContainer
    </>
  );
};
