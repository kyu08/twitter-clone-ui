import * as React from 'react';
import styled from 'styled-components';

interface TweetContentProps {
  content: string;
}

const TweetContentWrapper = styled.div`
  word-break: break-all;
`;

export const TweetContent: React.FC<TweetContentProps> = ({ content }) => {
  return <TweetContentWrapper>{content}</TweetContentWrapper>;
};
