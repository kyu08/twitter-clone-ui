import * as React from 'react';
import styled from 'styled-components';
import { UserImageSection } from './Tweet/UserImageSection';
import { UserDataModel } from '../../applicationService/DTO/UserDataModel';

const IMAGE_SIZE = 30;

type Props = {
  logout(): void;
  userDataModel: UserDataModel;
};

const ProfileLinkWrapper = styled.span`
  margin: auto 7px;
`;

export const HomeHeaderContent: React.FC<Props> = ({
  logout,
  userDataModel,
}) => {
  const { userImageURL, screenName } = userDataModel;

  return (
    <>
      <ProfileLinkWrapper>
        <UserImageSection
          userImageURL={userImageURL}
          imageSize={IMAGE_SIZE}
          screenName={screenName}
        />
      </ProfileLinkWrapper>
      <button onClick={() => logout()}>Logout</button>
    </>
  );
};
