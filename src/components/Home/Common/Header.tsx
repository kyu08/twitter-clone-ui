import * as React from 'react';
import classes from './Header.module.css';
import { TODO } from '../../../util/Util';

export const Header: React.FC<TODO<'children'>> = (props) => {
  const { children } = props;

  return <div className={classes.Header}>{children}</div>;
};
