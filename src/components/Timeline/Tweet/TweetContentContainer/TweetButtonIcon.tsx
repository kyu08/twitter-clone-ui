import * as React from 'react';
import classes from './TweetButtonIcon.module.css';

type TweetButtonContainerProps = {
  buttonIcon: any;
};

export const TweetButtonIcon: React.FC<TweetButtonContainerProps> = (props) => {
  const { buttonIcon } = props;

  return <div className={classes.TweetButtonContainer}>{buttonIcon}</div>;
};
