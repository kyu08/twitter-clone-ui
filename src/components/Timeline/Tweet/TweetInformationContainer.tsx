import * as React from 'react';
import classes from './TweetInformationContainer.module.css';
import { UserName } from './TweetInformationContainer/UserName';
import { ScreenName } from './TweetInformationContainer/ScreenName';
import { HowLongAgo } from './TweetInformationContainer/HowLongAgo';
import { TweetMenuButton } from './Common/TweetMenuButton';

export const TweetInformationContainer: React.FC<{}> = () => {
  return (
    <div className={classes.TweetInformationContainer}>
      <UserName userName="ねこ" />
      <ScreenName screenName="i_am_cat" />
      <HowLongAgo howLongAgo={10} />
      {/* todo ↓こいつは右揃え */}
      <div className={classes.TweetOptionButtonWrapper}>
        <TweetMenuButton buttonTitle="+" />
      </div>
    </div>
  );
};
