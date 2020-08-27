import * as React from 'react';
import styled from 'styled-components';
import { Header } from './Home/Common/Header';
import { ProfileHeaderContent } from './Home/Profile/ProfileHeaderContent';
import { UserImageSection } from './Home/Tweet/UserImageSection';
import Store from '../Store';
import { DefaultUserImageURL } from '../util/Util';
import { Footer } from './Home/Common/Footer';

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
  min-height: 235px;
  padding: 10px 15px 10px;
  border-bottom: solid 1px rgb(136, 153, 166);
  word-break: break-all;
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

const UserName = styled.span`
  display: block;
  margin-top: 45px;
  font-weight: bold;
  font-size: 20px;
`;

const ScreenName = styled.div`
  color: #8899a6;
  font-size: 16px;
`;

const Bio = styled.span`
  font-size: 16px;
  display: block;
  margin: 8px 0;
`;

const UserLocation = styled.span`
  font-size: 16px;
  color: #8899a6;
`;

const CreatedAt = styled.span`
  font-size: 16px;
  color: #8899a6;
  display: block;
`;

const FollowingFollowerWrapper = styled.div`
  margin: 10px 0;
`;

const FollowCountUtil = styled.span`
  font-weight: bold;
`;

const FollowDisplayUtil = styled.span`
  font-size: 16px;
  color: #8899a6;
  margin-right: 25px;
  margin-left: 10px;
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
        <UserName>Queueしま</UserName>
        <ScreenName>@kyu___8</ScreenName>
        <Bio>つよつよえんじにあ</Bio>
        <UserLocation>⛳️tokyo</UserLocation>
        <CreatedAt>🗓XXXX年YY月からTwitterを利用しています</CreatedAt>
        <FollowingFollowerWrapper>
          <FollowCountUtil>198</FollowCountUtil>
          <FollowDisplayUtil>フォロー中</FollowDisplayUtil>
          <FollowCountUtil>2.5億</FollowCountUtil>
          <FollowDisplayUtil>フォロワー</FollowDisplayUtil>
        </FollowingFollowerWrapper>
      </ProfileSection>
      <Footer />
    </>
  );
};
