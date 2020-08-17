import * as React from 'react';
// import { Redirect } from 'react-router-dom';
import classes from './ProfileContainer.module.css';
import { Header } from './Home/Common/Header';
import { ProfileHeaderContent } from './Home/Profile/ProfileHeaderContent';

type Props = {
  isLogin: boolean;
};

// todo ひととおりできたら presentation component として view 部分を切り出していく
export const ProfileContainer: React.FC<Props> = (props) => {
  const { isLogin } = props;

  return (
    <>
      {/* todo ↓ 開発用に comment out */}
      {/* {!isLogin && <Redirect to="/" />}*/}
      <Header>
        <ProfileHeaderContent />
      </Header>
      <div className={classes.HeaderImage} />
      <div className={classes.ProfileSection} />
    </>
  );
};
