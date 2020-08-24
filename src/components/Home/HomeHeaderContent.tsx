import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserImageSection } from './Tweet/UserImageSection';

type Props = {
  logout?(): void;
};

const LoginButtonWrapper = styled.div`
  margin: auto 7px;
`;

export const HomeHeaderContent: React.FC<Props> = ({ logout }) => {
  const imageSize = 30;
  // todo これ動的にしよう -> まずは undux でグローバル管理にするところから
  const userImageURL =
    'https://test-kyu08.s3-ap-northeast-1.amazonaws.com/userImage/default-user-image.png';

  return (
    <>
      <LoginButtonWrapper>
        <Link to="/profile">
          <UserImageSection userImageURL={userImageURL} imageSize={imageSize} />
        </Link>
      </LoginButtonWrapper>
      {logout ? <button onClick={() => logout()}>Logout</button> : null}
    </>
  );
};
