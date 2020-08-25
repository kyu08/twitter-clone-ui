import * as React from 'react';
import styled from 'styled-components';

type Props = {
  message: string;
};

const MessageWrapper = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  margin: 30px 0 5px 0;
`;

export const Message: React.FC<Props> = ({ message }) => {
  return <MessageWrapper>{message}</MessageWrapper>;
};
