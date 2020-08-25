import * as React from 'react';
import styled from 'styled-components';
import TwitterLogo from './TwitterLogo.png';

const LogoWrapper = styled.div`
  text-align: center;
  padding-top: 25px;
`;

const LogoImage = styled.img`
  height: 50px;
  width: auto;
`;

export const Logo: React.FC<{}> = () => {
  return (
    <LogoWrapper>
      <LogoImage src={TwitterLogo} alt="logo" />
    </LogoWrapper>
  );
};
