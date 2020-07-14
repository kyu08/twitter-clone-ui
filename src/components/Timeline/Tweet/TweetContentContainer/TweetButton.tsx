import * as React from 'react';
import classes from './TweetButton.module.css';
import { TweetButtonIcon } from './TweetButtonIcon';
import { TweetButtonNumber } from './TweetButtonNumber';
import { TODO } from '../../../../util/Util';

interface TweetButtonNumberProps {
  buttonIcon: TODO<'JSXComponent'>;
  tweetButtonNumber: number;
}

export const TweetButton: React.FC<TweetButtonNumberProps> = (props) => {
  const { buttonIcon, tweetButtonNumber } = props;

  return (
    <div className={classes.TweetButton}>
      <TweetButtonIcon buttonIcon={buttonIcon} />
      <TweetButtonNumber tweetButtonNumber={tweetButtonNumber} />
    </div>
  );
};
