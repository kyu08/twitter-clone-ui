import * as React from 'react';
import classes from './TweetButtonCount.module.css';

interface TweetButtonCountProps {
  tweetButtonCount: number;
}

export const TweetButtonCount: React.FC<TweetButtonCountProps> = ({
  tweetButtonCount,
}) => {
  return <div className={classes.TweetButtonCount}>{tweetButtonCount}</div>;
};
