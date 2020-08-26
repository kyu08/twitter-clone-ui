import * as React from 'react';
import styled from 'styled-components';
import { Header } from './Home/Common/Header';
import { ProfileHeaderContent } from './Home/Profile/ProfileHeaderContent';
import { UserImageSection } from './Home/Tweet/UserImageSection';
import Store from '../Store';
import { DefaultUserImageURL } from '../util/Util';

const IMAGE_SIZE = 84;

const LoginButtonWrapper = styled.div`
  position: absolute;
  top: 137px;
  left: 5px;
`;

const HeaderImage = styled.div`
  background-color: darkgreen;
  width: 100%;
  height: 124px;
`;

const ProfileSection = styled.div`
  height: 235px;
  padding: 10px 15px 10px;
  border-bottom: solid 1px rgb(136, 153, 166);
`;

export const ProfileContainer: React.FC = () => {
  const store = Store.useStore();
  // memo ↓ 開発用に comment out
  // const isLogin = store.get('isLogin');

  const userDataModel = store.get('userDataModel');
  const userImageURL = userDataModel
    ? userDataModel.userImageURL
    : DefaultUserImageURL;

  return (
    <>
      {/* memo ↓ 開発用に comment out */}
      {/* {!isLogin && <Redirect to="/" />}*/}
      <Header>
        <ProfileHeaderContent />
      </Header>
      <HeaderImage />
      <ProfileSection>
        <LoginButtonWrapper>
          <UserImageSection
            imageSize={IMAGE_SIZE}
            userImageURL={userImageURL}
          />
        </LoginButtonWrapper>
      </ProfileSection>
    </>
  );
};
