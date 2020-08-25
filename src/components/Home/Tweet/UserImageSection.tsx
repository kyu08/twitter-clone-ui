import * as React from 'react';
import styled from 'styled-components';

type Props = {
  userImageURL: string;
  imageSize: number;
};

export const UserImageSection: React.FC<Props> = ({
  userImageURL,
  imageSize,
}) => {
  const Img = styled.img`
    font-size: 5px;
    margin: 10px;
    width: ${imageSize}px;
    height: ${imageSize}px;
    border-radius: 50%;
  `;

  return <Img src={userImageURL} alt="users profile" />;
};
