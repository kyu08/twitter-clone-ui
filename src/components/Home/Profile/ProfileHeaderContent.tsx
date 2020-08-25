import * as React from 'react';
import styled from 'styled-components';
import { GoBackButton } from '../Common/GoBackButton';

const Header = styled.div`
  width: 100%;
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-top: auto;
  margin-bottom: auto;
  height: 100%;
`;

const UserName = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

const TweetCount = styled.div`
  color: #8899a6;
  font-size: 13px;
`;

export const ProfileHeaderContent: React.FC = () => {
  return (
    <Header>
      <GoBackButton />
      <Wrapper>
        <UserName>userName</UserName>
        <TweetCount>1,234 ツイート</TweetCount>
      </Wrapper>
    </Header>
  );
};
