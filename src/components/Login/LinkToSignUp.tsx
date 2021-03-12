import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LinkStyle } from '../util/util';

const LinkToSignUpWrapper = styled.div`
  text-align: center;
  color: #1da1f2;
  text-decoration: none;
  margin: 20px 0;
  font-size: 13px;
  font-weight: bold;
`;

export const LinkToSignUp: React.FC = () => {
  return (
    <Link to="signup" style={LinkStyle}>
      <LinkToSignUpWrapper>アカウント作成</LinkToSignUpWrapper>
    </Link>
  );
};
