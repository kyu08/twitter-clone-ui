import * as React from 'react';
import styled from 'styled-components';

interface UserNameProps {
  userName: string;
}

const UserNameWrapper = styled.div`
  margin: 0 5px;
  font-weight: bold;
`;

export const UserName: React.FC<UserNameProps> = ({ userName }) => {
  return <UserNameWrapper>{userName}</UserNameWrapper>;
};
