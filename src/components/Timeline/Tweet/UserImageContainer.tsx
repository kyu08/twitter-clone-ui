import * as React from 'react';
import classes from './UserImageContainer.module.css';

type Props = {
  userImage: string;
};

export const UserImageContainer: React.FC<Props> = (props) => {
  const { userImage } = props;

  return (
    <img
      className={classes.UserImageContainer}
      src={userImage}
      alt="users profile"
    />
  );
};
