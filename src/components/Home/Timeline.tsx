import * as React from 'react';
import classes from './Timeline.module.css';
import { TweetCard } from './TweetCard';
import { TweetDataModel } from '../../infrastructure/TweetDataModel';

type Props = {
  tweetDataModelArray: TweetDataModel[];
};

export const Timeline: React.FC<Props> = ({ tweetDataModelArray }) => {
  return (
    <div className={classes.Timeline}>
      {/* todo #112 Tweet / Reply / Retweet component だしわけ関数実装する*/}
      {tweetDataModelArray.map((t: TweetDataModel) => (
        <TweetCard tweetDataModel={t} key={t.tweetId} />
      ))}
    </div>
  );
};
