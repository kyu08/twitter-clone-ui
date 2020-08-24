import * as React from 'react';
import classes from './ScreenName.module.css';

interface ScreenNameProps {
  screenName: string;
}

export const ScreenName: React.FC<ScreenNameProps> = ({ screenName }) => {
  return <div className={classes.ScreenName}>@{screenName}</div>;
};
