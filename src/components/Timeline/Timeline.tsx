import * as React from 'react';
import classes from './Timeline.module.css';
import { TweetComponent } from './TweetComponent';
import Tweet from '../../domain/models/Tweet/ConcreteClasses/Tweet';

type Props = {
  tweetArray: Tweet[];
};

export const Timeline: React.FC<Props> = (props) => {
  const { tweetArray } = props;

  return (
    <div className={classes.Timeline}>
      {tweetArray.map((t) => (
        // todo component が properties を知ってるイマイチ
        <TweetComponent tweet={t} key={t.tweetId.tweetId} />
      ))}
    </div>
  );
};
