import * as React from 'react';
// import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import classes from './ProfileContainer.module.css';
import { Header } from './Home/Common/Header';
import { ProfileHeaderContent } from './Home/Profile/ProfileHeaderContent';
import { UserImageSection } from './Home/Tweet/UserImageSection';

type Props = {
  isLogin: boolean;
};

// todo ひととおりできたら presentation component として view 部分を切り出していく
export const ProfileContainer: React.FC<Props> = (props) => {
  const { isLogin } = props;
  const imageSize = 84;
  // todo これ動的にしよう -> まずは undux でグローバル管理にするところから
  const userImageURL =
    'https://test-kyu08.s3-ap-northeast-1.amazonaws.com/userImage/default-user-image.png';

  const LoginButtonWrapper = styled.div`
    position: absolute;
    top: 137px;
    left: 5px;
  `;

  return (
    <>
      {/* todo ↓ 開発用に comment out */}
      {/* {!isLogin && <Redirect to="/" />}*/}
      <Header>
        <ProfileHeaderContent />
      </Header>
      <div className={classes.HeaderImage} />
      <div className={classes.ProfileSection}>
        <LoginButtonWrapper>
          <UserImageSection imageSize={imageSize} userImageURL={userImageURL} />
        </LoginButtonWrapper>
      </div>
    </>
  );
};
