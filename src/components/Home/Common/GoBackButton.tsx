import * as React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

// container であり presentation でもあるけどいいかな、、、
export const GoBackButton: React.FC = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  const IconWrapper = styled.div`
    color: #1da1f2;
    padding: 15px 15px;
  `;

  return (
    <IconWrapper onClick={() => goBack()}>
      <ArrowBackIcon />
    </IconWrapper>
  );
};
