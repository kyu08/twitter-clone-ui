import * as React from 'react';
import classes from '../../ProfileContainer.module.css';
import { GoBackButton } from '../Common/GoBackButton';

export const ProfileHeaderContent: React.FC = () => {
  return (
    <div className={classes.Header}>
      <GoBackButton />
    </div>
  );
};
