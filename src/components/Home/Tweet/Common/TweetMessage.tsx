import * as React from 'react';
import classes from './TweetMessage.module.css';

type Props = {
  userName: string;
  message: string;
  icon?: React.FC;
};

export const TweetMessage: React.FC<Props> = ({ userName, message, icon }) => {
  return (
    <div className={classes.TweetMessage}>
      {icon}
      <div className={classes.MessageText}>
        {userName}
        {message}
      </div>
    </div>
  );
};
