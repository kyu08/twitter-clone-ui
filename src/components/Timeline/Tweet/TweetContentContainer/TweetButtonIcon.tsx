import * as React from 'react';
import classes from './TweetButtonIcon.module.css';
import { TweetMenuButton } from '../Common/TweetMenuButton';

interface TweetButtonContainerProps {
  buttonIcon: any;
}

export const TweetButtonIcon: React.FC<TweetButtonContainerProps> = (props) => {
  const { buttonIcon } = props;

  return (
    <div className={classes.TweetButtonContainer}>
      <TweetMenuButton buttonIcon={buttonIcon} />
    </div>
  );
};
