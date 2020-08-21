import * as React from 'react';
import classes from './Timeline.module.css';
import { TweetCard } from './TweetCard';
import Tweet from '../../domain/models/Tweet/ConcreteClasses/Tweet';
import { TweetApplicationService } from '../../application/TweetApplicationService';

type Props = {
  // todo DTO を使おう
  tweetArray: Tweet[];
};

export const Timeline: React.FC<Props> = (props) => {
  const { tweetArray } = props;

  return (
    <div className={classes.Timeline}>
      {/* todo #112 Tweet / Reply / Retweet component だしわけ関数実装する*/}
      {tweetArray.map((t) => (
        <TweetCard tweet={t} key={TweetApplicationService.returnTweetId(t)} />
      ))}
    </div>
  );
};
