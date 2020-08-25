import * as React from 'react';
import styled from 'styled-components';
import { TODO } from '../../../util/Util';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 53px;
  border-bottom: solid 1px rgb(136, 153, 166);
`;

export const Header: React.FC<TODO<'children'>> = ({ children }) => {
  return <HeaderWrapper>{children}</HeaderWrapper>;
};
