import * as React from 'react';
import styled from 'styled-components';

interface TweetButtonCountProps {
  tweetButtonCount: number;
}

const TweetButtonCountWrapper = styled.div`
  margin: 7px 0 0 7px;
`;

export const TweetButtonCount: React.FC<TweetButtonCountProps> = ({
  tweetButtonCount,
}) => {
  return <TweetButtonCountWrapper>{tweetButtonCount}</TweetButtonCountWrapper>;
};
