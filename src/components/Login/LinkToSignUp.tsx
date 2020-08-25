import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
    <Link to="signup">
      <LinkToSignUpWrapper>アカウント作成</LinkToSignUpWrapper>
    </Link>
  );
};
