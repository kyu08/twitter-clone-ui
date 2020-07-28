import * as React from 'react';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import classes from './TweetMessage.module.css';

type Props = {
  userName: string;
};

export const TweetMessage: React.FC<Props> = (props) => {
  const { userName } = props;

  return (
    <div className={classes.TweetMessage}>
      <RepeatOutlinedIcon fontSize="small" />
      <div className={classes.MessageText}>{userName}さんがリツイート</div>
    </div>
  );
};
