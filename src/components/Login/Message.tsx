import * as React from 'react';
import classes from './Message.module.css';

type Props = {
  message: string;
};

export const Message: React.FC<Props> = ({ message }) => {
  return <div className={classes.Message}>{message}</div>;
};
