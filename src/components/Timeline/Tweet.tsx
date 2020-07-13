import * as React from 'react';
import classes from './Tweet.module.css';
import { UserImageContainer } from './Tweet/UserImageContainer';
import { TweetInformationContainer } from './Tweet/TweetInformationContainer';
import { TweetContentContainer } from './Tweet/TweetContentContainer';

export const Tweet: React.FC<{}> = () => {
  return (
    <div className={classes.Tweet}>
      <UserImageContainer />
      <div className="TweetRightContainer">
        <TweetInformationContainer />
        <TweetContentContainer />
      </div>
    </div>
  );
};
