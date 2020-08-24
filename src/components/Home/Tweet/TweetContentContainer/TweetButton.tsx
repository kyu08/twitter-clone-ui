import * as React from 'react';
import classes from './TweetButton.module.css';
import { TweetButtonIcon } from './TweetButtonIcon';
import { TweetButtonCount } from './TweetButtonCount';
import { TODO } from '../../../../util/Util';

interface TweetButtonCountProps {
  buttonIcon: TODO<'JSXComponent'>;
  tweetButtonCount: number;
}

export const TweetButton: React.FC<TweetButtonCountProps> = ({
  buttonIcon,
  tweetButtonCount,
}) => {
  return (
    <div className={classes.TweetButton}>
      <TweetButtonIcon buttonIcon={buttonIcon} />
      <TweetButtonCount tweetButtonCount={tweetButtonCount} />
    </div>
  );
};
