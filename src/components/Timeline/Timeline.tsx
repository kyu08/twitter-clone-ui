import * as React from 'react';
import classes from './Timeline.module.css';
import { TweetComponent } from './TweetComponent';
import Tweet from '../../domain/models/Tweet/ConcreteClasses/Tweet';
import { TweetApplicationService } from '../../application/Tweet/TweetApplicationService';

type Props = {
  tweetArray: Tweet[];
};

export const Timeline: React.FC<Props> = (props) => {
  const { tweetArray } = props;

  return (
    <div className={classes.Timeline}>
      {/* todo #112 これ関数化する*/}
      {tweetArray.map((t) => (
        <TweetComponent
          tweet={t}
          key={TweetApplicationService.returnTweetId(t)}
        />
      ))}
    </div>
  );
};
