import * as React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  userImageURL: string;
  imageSize: number;
  screenName: string;
};

export const UserImageSection: React.FC<Props> = ({
  userImageURL,
  imageSize,
  screenName,
}) => {
  const imgStyle = {
    fontSize: '5px',
    margin: '10px',
    width: `${imageSize}px`,
    height: `${imageSize}px`,
    borderRadius: '50%',
  };

  return (
    <Link to={`/${screenName}`}>
      <img src={userImageURL} alt="users profile" style={imgStyle} />
    </Link>
  );
};
