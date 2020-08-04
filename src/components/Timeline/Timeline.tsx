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
      {/* todo #112 これ関数化する*/}
      {tweetArray.map((t) => (
        // todo #116 component が properties を知ってるイマイチ application 経由でtweetId知る形にしよう
        <TweetComponent tweet={t} key={t.tweetId.tweetId} />
      ))}
    </div>
  );
};
