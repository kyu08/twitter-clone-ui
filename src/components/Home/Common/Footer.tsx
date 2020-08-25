import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TweetCreateLink } from './TweetCreateLink';

const FooterWrapper = styled.div`
  width: 100%;
  height: 59px;
  border-top: solid 1px rgb(136, 153, 166);
  display: flex;
`;

export const Footer: React.FC<{}> = () => {
  return (
    <FooterWrapper>
      <Link to="/tweet">
        <TweetCreateLink />
      </Link>
    </FooterWrapper>
  );
};
