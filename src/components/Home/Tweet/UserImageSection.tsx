import * as React from 'react';

type Props = {
  userImageURL: string;
  imageSize: number;
};

export const UserImageSection: React.FC<Props> = ({
  userImageURL,
  imageSize,
}) => {
  const imgStyle = {
    fontSize: '5px',
    margin: '10px',
    width: `${imageSize}px`,
    height: `${imageSize}px`,
    borderRadius: '50%',
  };

  return <img src={userImageURL} alt="users profile" style={imgStyle} />;
};
