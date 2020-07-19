import * as React from 'react';
import classes from './Timeline.module.css';
import { Tweet } from './Tweet';

export const Timeline: React.FC<{}> = () => {
  return (
    <div className={classes.Timeline}>
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
};
