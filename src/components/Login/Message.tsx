import * as React from 'react';
import classes from './Message.module.css';

type Props = {
  message: string;
};

export const Message: React.FC<Props> = (props) => {
  const { message } = props;

  return <div className={classes.Message}>{message}</div>;
};
