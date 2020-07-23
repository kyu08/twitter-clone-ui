import * as React from 'react';
import classes from './UserImageContainer.module.css';

type Props = {
  userImage: string;
};

export const UserImageContainer: React.FC<Props> = (props) => {
  const { userImage } = props;

  return <div className={classes.UserImageContainer}>{userImage}</div>;
};
