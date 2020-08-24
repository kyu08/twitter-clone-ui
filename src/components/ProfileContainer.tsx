import * as React from 'react';
import styled from 'styled-components';
import { Header } from './Home/Common/Header';
import { ProfileHeaderContent } from './Home/Profile/ProfileHeaderContent';
import { UserImageSection } from './Home/Tweet/UserImageSection';
import Store from '../Store';

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

// todo ひととおりできたら presentation component として view 部分を切り出していく
export const ProfileContainer: React.FC = () => {
  const store = Store.useStore();
  const isLogin = store.get('isLogin');

  const imageSize = 84;
  // todo  これ動的にしよう -> まずは undux でグローバル管理にするところから
  const userImageURL =
    'https://test-kyu08.s3-ap-northeast-1.amazonaws.com/userImage/default-user-image.png';

  return (
    <>
      {/* todo ↓ 開発用に comment out */}
      {/* {!isLogin && <Redirect to="/" />}*/}
      <Header>
        <ProfileHeaderContent />
      </Header>
      <HeaderImage />
      <ProfileSection>
        <LoginButtonWrapper>
          <UserImageSection imageSize={imageSize} userImageURL={userImageURL} />
        </LoginButtonWrapper>
      </ProfileSection>
    </>
  );
};
