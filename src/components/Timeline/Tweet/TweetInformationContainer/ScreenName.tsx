import * as React from 'react';
import classes from './ScreenName.module.css';

interface ScreenNameProps {
  screenName: string;
}

export const ScreenName: React.FC<ScreenNameProps> = (props) => {
  const { screenName } = props;

  return <div className={classes.ScreenName}>@{screenName}</div>;
};
