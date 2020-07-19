import * as React from 'react';
import classes from './Header.module.css';

export const Header: React.FC<{}> = () => {
  const logout = () => {
    window.location.href = '/login';
  };

  return (
    <div className={classes.Header}>
      Header
      <button onClick={() => logout()}>logout</button>
    </div>
  );
};
