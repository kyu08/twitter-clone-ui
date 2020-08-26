import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserImageSection } from './Tweet/UserImageSection';
import { UserDataModel } from '../../infrastructure/UserDataModel';

const IMAGE_SIZE = 30;

type Props = {
  logout(): void;
  userDataModel: UserDataModel;
};

const LoginButtonWrapper = styled.div`
  margin: auto 7px;
`;

export const HomeHeaderContent: React.FC<Props> = ({
  logout,
  userDataModel,
}) => {
  const { userImageURL } = userDataModel;

  return (
    <>
      <LoginButtonWrapper>
        <Link to="/profile">
          <UserImageSection
            userImageURL={userImageURL}
            imageSize={IMAGE_SIZE}
          />
        </Link>
      </LoginButtonWrapper>
      <button onClick={() => logout()}>Logout</button>
    </>
  );
};
