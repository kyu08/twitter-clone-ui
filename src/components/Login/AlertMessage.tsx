import * as React from 'react';
import styled from 'styled-components';

type Props = {
  alertMessage: string;
};

const InvalidLogin = styled.div`
  color: red;
  width: 330px;
  margin: 0 auto;
  font-size: 15px;
`;

export const AlertMessage: React.FC<Props> = ({ alertMessage }) => {
  return (
    <InvalidLogin>
      <span>{alertMessage}</span>
    </InvalidLogin>
  );
};
