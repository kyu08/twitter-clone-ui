import * as React from 'react';
// import { Redirect } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
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
      {/* todo ↓ 開発用に comment out */}
      {/* {!isLogin && <Redirect to="/" />}*/}
      <Header>
        {/* todo component として分離する */}
        <div className={classes.Header}>
          <div className={classes.Icon}>
            {/* <div className={classes.Icon} onClick={() => goBack()}>*/}
            <ArrowBackIcon />
          </div>
          <div className={classes.ButtonWrapper} />
        </div>
        {/* todo component として分離する */}
      </Header>
      <div className={classes.HeaderImage} />
      this is ProfileContainer
    </>
  );
};
