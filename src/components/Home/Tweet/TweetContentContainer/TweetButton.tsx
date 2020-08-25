import * as React from 'react';
import styled from 'styled-components';
import { TweetButtonIcon } from './TweetButtonIcon';
import { TweetButtonCount } from './TweetButtonCount';
import { TODO } from '../../../../util/Util';

interface TweetButtonCountProps {
  buttonIcon: TODO<'JSXComponent'>;
  tweetButtonCount: number;
}

const TweetButtonWrapper = styled.div`
  display: flex;
`;

export const TweetButton: React.FC<TweetButtonCountProps> = ({
  buttonIcon,
  tweetButtonCount,
}) => {
  return (
    <TweetButtonWrapper>
      <TweetButtonIcon buttonIcon={buttonIcon} />
      <TweetButtonCount tweetButtonCount={tweetButtonCount} />
    </TweetButtonWrapper>
  );
};
