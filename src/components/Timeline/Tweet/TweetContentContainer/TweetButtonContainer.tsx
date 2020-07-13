import * as React from 'react';
import classes from './TweetButtonContainer.module.css';
import { TweetMenuButton } from '../Common/TweetMenuButton';

interface Hoge {
  buttonTitle: any;
}

export const TweetButtonContainer: React.FC<Hoge> = (props) => {
  const { buttonTitle } = props;

  return (
    <div className={classes.TweetButtonContainer}>
      <TweetMenuButton buttonTitle={buttonTitle} />
    </div>
  );
};
