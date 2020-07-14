import * as React from 'react';
import classes from './TweetContentContainer.module.css';
import { TweetContent } from './TweetContentContainer/TweetContent';
import { TweetButtonContainer } from './TweetContentContainer/TweetButtonContainer';

export const TweetContentContainer: React.FC<{}> = () => {
  return (
    <div className={classes.TweetContentContainer}>
      <TweetContent content="hoge_hoge_hoge_hoge_hoge_hoge_hoge_hoge_hoge_hoge_hoge_aaaaaaaaaaaaaaaaaaaahoge_" />
      <div className={classes.TweetButtonsWrapper}>
        {/* todo map で書く?*/}
        <TweetButtonContainer buttonTitle="R" />
        <TweetButtonContainer buttonTitle="R" />
        <TweetButtonContainer buttonTitle="L" />
        <TweetButtonContainer buttonTitle="S" />
      </div>
    </div>
  );
};
