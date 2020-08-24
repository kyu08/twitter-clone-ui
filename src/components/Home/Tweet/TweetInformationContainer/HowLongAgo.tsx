import * as React from 'react';
import classes from './HowLongAgo.module.css';

interface HowLongAgoProps {
  howLongAgo: string;
}

export const HowLongAgo: React.FC<HowLongAgoProps> = ({ howLongAgo }) => {
  return <div className={classes.HowLongAgo}>{howLongAgo}</div>;
};
