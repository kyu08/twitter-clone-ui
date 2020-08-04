import * as React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import classes from './TweetCreateHeader.module.css';

type Props = {
  //
};

export const TweetCreateHeader: React.FC<Props> = (props) => {
  return (
    <div className={classes.Header}>
      <div className={classes.Icon}>
        <ArrowBackIcon />
      </div>
      <div className={classes.ButtonWrapper}>
        <button className={classes.tweetButton}>ツイートする</button>
      </div>
    </div>
  );
};
