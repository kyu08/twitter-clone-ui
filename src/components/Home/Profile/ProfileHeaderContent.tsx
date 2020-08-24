import * as React from 'react';
import classes from './ProfileHeaderContent.module.css';
import { GoBackButton } from '../Common/GoBackButton';

export const ProfileHeaderContent: React.FC = () => {
  return (
    <div className={classes.Header}>
      <GoBackButton />
      <div className={classes.Wrapper}>
        <span className={classes.UserName}>userName</span>
        <div className={classes.TweetCount}>1,234 ツイート</div>
      </div>
    </div>
  );
};
