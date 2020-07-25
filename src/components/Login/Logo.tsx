import * as React from 'react';
import classes from './Logo.module.css';
import TwitterLogo from './TwitterLogo.png';

export const Logo: React.FC<{}> = () => {
  return (
    <div className={classes.Logo}>
      <img className={classes.LogoImage} src={TwitterLogo} alt="logo" />
    </div>
  );
};
