import * as React from 'react';
import classes from './TweetContentContainer.module.css';
import { TweetContent } from './TweetContentContainer/TweetContent';
import { TweetButtonContainer } from './TweetContentContainer/TweetButtonContainer';

export const TweetContentContainer: React.FC<{}> = () => {
  return (
    <div className={classes.TweetContentContainer}>
      <TweetContent content="にゃ〜ん" />
      <div className={classes.TweetButtonsWrapper}>
        {/* todo map で書く*/}
        <TweetButtonContainer buttonTitle="Reply" />
        <TweetButtonContainer buttonTitle="RT" />
        <TweetButtonContainer buttonTitle="Like" />
        <TweetButtonContainer buttonTitle="Share" />
      </div>
    </div>
  );
};
