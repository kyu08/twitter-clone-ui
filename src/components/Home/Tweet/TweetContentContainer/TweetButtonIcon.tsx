import * as React from 'react';
import styled from 'styled-components';
import { TODO } from '../../../../util/Util';

type TweetButtonContainerProps = {
  buttonIcon: TODO<'material UI SVG Icon'>;
};

const TweetButtonContainer = styled.div`
  margin: 7px 0;
`;

export const TweetButtonIcon: React.FC<TweetButtonContainerProps> = ({
  buttonIcon,
}) => {
  return <TweetButtonContainer>{buttonIcon}</TweetButtonContainer>;
};
