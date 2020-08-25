import * as React from 'react';
import styled from 'styled-components';
import { GoBackButton } from '../Common/GoBackButton';

type Props = {
  submitTweet(): void;
  canSubmitTweet: boolean;
};

const Header = styled.div`
  width: 100%;
  display: flex;
`;

const ButtonWrapper = styled.div`
  margin-left: auto;
  padding: 12px 12px;
`;

const TweetButton = styled.button`
  color: white;
  border: none;
  background-color: #1da1f2;
  font-weight: bold;
  border-radius: 15px;
  padding: 4px 10px;
  font-size: 15px;
  :disabled {
    opacity: 0.5;
  }
`;

export const TweetCreateHeaderContent: React.FC<Props> = ({
  submitTweet,
  canSubmitTweet,
}) => {
  return (
    <Header>
      <GoBackButton />
      <ButtonWrapper>
        <TweetButton onClick={() => submitTweet()} disabled={!canSubmitTweet}>
          ツイートする
        </TweetButton>
      </ButtonWrapper>
    </Header>
  );
};
