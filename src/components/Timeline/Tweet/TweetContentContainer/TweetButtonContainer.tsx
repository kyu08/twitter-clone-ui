import * as React from 'react';
import classes from './TweetButtonContainer.module.css';
import { TweetMenuButton } from '../Common/TweetMenuButton';

interface TweetButtonContainerProps {
  buttonIcon: any;
}

export const TweetButtonContainer: React.FC<TweetButtonContainerProps> = (
  props,
) => {
  const { buttonIcon } = props;

  return (
    <div className={classes.TweetButtonContainer}>
      <TweetMenuButton buttonIcon={buttonIcon} />
    </div>
  );
};
