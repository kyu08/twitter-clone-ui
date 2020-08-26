import * as React from 'react';
import styled from 'styled-components';
import { Header } from './Home/Common/Header';
import { ProfileHeaderContent } from './Home/Profile/ProfileHeaderContent';
import { UserImageSection } from './Home/Tweet/UserImageSection';
import Store from '../Store';
import { DefaultUserImageURL } from '../util/Util';

const IMAGE_SIZE = 84;

const ProfileUpperSection = styled.div`
  position: absolute;
  top: 137px;
  left: 5px;
  display: flex;
  width: 100%;
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

const ButtonUtil = `font-weight: bold;
  border-radius: 30px;
  padding: 7px 15px;
  font-size: 15px;
  border: solid 1px #1da1f2;
`;

const FollowButton = styled.button`
  color: #1da1f2;
  background-color: rgba(0, 0, 0, 0);
  ${ButtonUtil}
`;

const UnFollowButton = styled.button`
  color: white;
  border-color: rgba(0, 0, 0, 0);
  background-color: #1da1f2;
  ${ButtonUtil}
`;

const ButtonWrapper = styled.div`
  margin-top: 50px;
  margin-left: auto;
  padding: 0 20px;
`;

export const ProfileContainer: React.FC = () => {
  // todo isCurrentUser を導入して true ならば編集できるようにする
  const [isFollowing, setIsFollowing] = React.useState(false);
  const store = Store.useStore();
  // memo ↓ 開発用に comment out
  // const isLogin = store.get('isLogin');

  const userDataModel = store.get('userDataModel');
  const userImageURL = userDataModel
    ? userDataModel.userImageURL
    : DefaultUserImageURL;

  // todo これ動的にする
  const tweetCount = 123123123;

  const toggleIsFollowing = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <>
      {/* memo ↓ 開発用に comment out */}
      {/* {!isLogin && <Redirect to="/" />}*/}
      <Header>
        {userDataModel && (
          <ProfileHeaderContent
            userDataModel={userDataModel}
            tweetCount={tweetCount}
          />
        )}
      </Header>
      <HeaderImage />
      <ProfileSection>
        <ProfileUpperSection>
          <UserImageSection
            imageSize={IMAGE_SIZE}
            userImageURL={userImageURL}
          />
          {isFollowing ? (
            <ButtonWrapper>
              <UnFollowButton onClick={() => toggleIsFollowing()}>
                フォロー中
              </UnFollowButton>
            </ButtonWrapper>
          ) : (
            <ButtonWrapper>
              <FollowButton onClick={() => toggleIsFollowing()}>
                フォロー
              </FollowButton>
            </ButtonWrapper>
          )}
        </ProfileUpperSection>
      </ProfileSection>
    </>
  );
};
