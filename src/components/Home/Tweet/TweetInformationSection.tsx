import * as React from 'react';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import styled from 'styled-components';
import { UserName } from './TweetInformationContainer/UserName';
import { ScreenName } from './TweetInformationContainer/ScreenName';
import { HowLongAgo } from './TweetInformationContainer/HowLongAgo';

type Props = {
  userName: string;
  screenName: string;
  howLongAgo: string;
};

const TweetInformationContainer = styled.div`
  font-size: 15px;
  display: flex;
  margin-top: 3px;
`;

const TweetOptionButtonWrapper = styled.div`
  margin-left: auto;
`;

export const TweetInformationSection: React.FC<Props> = ({
  howLongAgo,
  screenName,
  userName,
}) => {
  return (
    <TweetInformationContainer>
      <UserName userName={userName} />
      <ScreenName screenName={screenName} />
      <HowLongAgo howLongAgo={howLongAgo} />
      <TweetOptionButtonWrapper>
        <ExpandMoreOutlinedIcon />
      </TweetOptionButtonWrapper>
    </TweetInformationContainer>
  );
};
