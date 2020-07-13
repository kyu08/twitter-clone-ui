import * as React from 'react';
import classes from './TweetMenuButton.module.css';

interface TweetMenuButtonProp {
  buttonTitle: string;
}

// todo prop は命名微妙
export const TweetMenuButton: React.FC<TweetMenuButtonProp> = (props) => {
  const { buttonTitle } = props;

  return <div className={classes.TweetMenuButton}>{buttonTitle}</div>;
};
