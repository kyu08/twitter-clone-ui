import * as React from 'react';
import styled from 'styled-components';

interface ScreenNameProps {
  screenName: string;
}

const ScreenNameWrapper = styled.div`
  margin-right: 5px;
  color: #8899a6;
`;

export const ScreenName: React.FC<ScreenNameProps> = ({ screenName }) => {
  return <ScreenNameWrapper>@{screenName}</ScreenNameWrapper>;
};
