import * as React from 'react';
import styled from 'styled-components';

type Props = {
  userName: string;
  message: string;
  icon?: React.FC;
};

const TweetMessageWrapper = styled.div`
  color: #8899a6;
  font-size: 13px;
  font-family: 'Segoe UI', Meiryo, system-ui, -apple-system, BlinkMacSystemFont,
    sans-serif;
  margin-left: 55px;
  display: flex;
`;

const MessageText = styled.div`
  margin-left: 10px;
`;

export const TweetMessage: React.FC<Props> = ({ userName, message, icon }) => {
  return (
    <TweetMessageWrapper>
      {icon}
      <MessageText>
        {userName}
        {message}
      </MessageText>
    </TweetMessageWrapper>
  );
};
