import * as React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';
import classes from './TweetCreateHeader.module.css';

export const TweetCreateHeader: React.FC<{}> = () => {
  const history = useHistory();
  const Back = () => {
    history.goBack();
  };

  return (
    <div className={classes.Header}>
      <div className={classes.Icon} onClick={() => Back()}>
        <ArrowBackIcon />
      </div>
      <div className={classes.ButtonWrapper}>
        <button className={classes.tweetButton}>ツイートする</button>
      </div>
    </div>
  );
};
