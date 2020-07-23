import * as React from 'react';
import { Link } from 'react-router-dom';
import classes from './LinkToSignUp.module.css';

export const LinkToSignUp: React.FC = () => {
  return (
    <Link to="signup">
      <div className={classes.LinkToSignUp}>アカウント作成</div>
    </Link>
  );
};
