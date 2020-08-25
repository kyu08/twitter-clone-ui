import * as React from 'react';
import styled from 'styled-components';
import { TweetCard } from './TweetCard';
import { TweetDataModel } from '../../infrastructure/TweetDataModel';

type Props = {
  tweetDataModelArray: TweetDataModel[];
};

const TimelineWrapper = styled.div`
  height: 86vh;
  width: 100%;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Timeline: React.FC<Props> = ({ tweetDataModelArray }) => {
  return (
    <TimelineWrapper>
      {/* todo #112 Tweet / Reply / Retweet component だしわけ関数実装する*/}
      {tweetDataModelArray.map((t: TweetDataModel) => (
        <TweetCard tweetDataModel={t} key={t.tweetId} />
      ))}
    </TimelineWrapper>
  );
};
