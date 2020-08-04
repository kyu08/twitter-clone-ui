import * as React from 'react';
import { UserImageContainer } from './Tweet/UserImageContainer';
import classes from './TweetCreate.module.css';
import { Header } from './Common/Header';
import { TweetCreateHeader } from './TweetCreateHeader';

type Props = {
  isLogin: boolean;
  userImageURL: string;
};

export const TweetCreate: React.FC<Props> = (props) => {
  const { isLogin, userImageURL } = props;

  return (
    <>
      {console.log(isLogin)}
      {/* {!isLogin && <Redirect to="/" />}*/}
      <TweetCreateHeader />
      <div className={classes.TweetCreate}>
        <UserImageContainer userImage={userImageURL} />
        <div className={classes.RightContainer}>
          <textarea className={classes.InputElement} wrap="soft" />
        </div>
      </div>
    </>
  );
};
