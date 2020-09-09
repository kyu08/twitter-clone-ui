import * as React from 'react';
import styled from 'styled-components';
import { GoBackButton } from '../Home/Common/GoBackButton';
import { UserDataModel } from '../../infrastructure/UserDataModel';

type Props = {
  userDataModel: UserDataModel;
  tweetCount: number;
};

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

export const ProfileHeaderContent: React.FC<Props> = ({
  userDataModel,
  tweetCount,
}) => {
  const { userName } = userDataModel;

  return (
    <Header>
      <GoBackButton />
      <Wrapper>
        <UserName>{userName}</UserName>
        <TweetCount>{tweetCount.toLocaleString()} ツイート</TweetCount>
      </Wrapper>
    </Header>
  );
};
