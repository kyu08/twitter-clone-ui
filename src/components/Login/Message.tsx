import * as React from 'react';
import classes from './Message.module.css';

export const Message: React.FC<{}> = () => {
  return <div className={classes.Message}>Twitterにログイン</div>;
};
