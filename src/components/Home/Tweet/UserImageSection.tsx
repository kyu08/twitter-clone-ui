import * as React from 'react';
import classes from './UserImageSection.module.css';

type Props = {
  userImageURL: string;
};

export const UserImageSection: React.FC<Props> = (props) => {
  const { userImageURL } = props;

  return (
    <img
      className={classes.UserImageContainer}
      src={userImageURL}
      alt="users profile"
    />
  );
};
