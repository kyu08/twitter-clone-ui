import * as React from 'react';
import classes from './UserName.module.css';

interface UserNameProps {
  userName: string;
}

export const UserName: React.FC<UserNameProps> = ({ userName }) => {
  return <div className={classes.UserName}>{userName}</div>;
};
