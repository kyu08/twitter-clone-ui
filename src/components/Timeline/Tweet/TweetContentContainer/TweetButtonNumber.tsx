import * as React from 'react';
import classes from './TweetButtonNumber.module.css';

interface TweetButtonNumberProps {
  tweetButtonNumber: number;
}

export const TweetButtonNumber: React.FC<TweetButtonNumberProps> = (props) => {
  const { tweetButtonNumber } = props;

  return <div className={classes.TweetButtonNumber}>{tweetButtonNumber}</div>;
};
