import * as React from 'react';
import styled from 'styled-components';

interface HowLongAgoProps {
  howLongAgo: string;
}

const HowLongAgoWrapper = styled.div`
  margin-right: 5px;
  color: #8899a6;
`;

export const HowLongAgo: React.FC<HowLongAgoProps> = ({ howLongAgo }) => {
  return <HowLongAgoWrapper>{howLongAgo}</HowLongAgoWrapper>;
};
