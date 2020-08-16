import * as React from 'react';
import classes from './UserImageContainer.module.css';

type Props = {
  userImageURL: string;
};

export const UserImageContainer: React.FC<Props> = (props) => {
  const { userImageURL } = props;

  return (
    <img
      className={classes.UserImageContainer}
      src={userImageURL}
      alt="users profile"
    />
  );
};
