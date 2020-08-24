import * as React from 'react';
import classes from './TweetContent.module.css';

interface TweetContentProps {
  content: string;
}

export const TweetContent: React.FC<TweetContentProps> = ({ content }) => {
  return <span className={classes.TweetContent}>{content}</span>;
};
