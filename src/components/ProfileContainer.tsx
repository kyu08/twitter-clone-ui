import * as React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './Home/Common/Header';
import { ProfileHeaderContent } from './Home/Profile/ProfileHeaderContent';
import { UserImageSection } from './Home/Tweet/UserImageSection';
import Store from '../Store';
import { DefaultUserImageURL } from '../util/Util';
import { Footer } from './Home/Common/Footer';
import UserApplicationService from '../application/UserApplicationService';
import ScreenName from '../domain/models/User/Profile/ScreenName';
import { UserDataModel } from '../infrastructure/UserDataModel';
import { FollowApplicationService } from '../application/FollowApplicationService';

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

const ScreenNameComponent = styled.div`
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
  const { screenName: screenNameRequested } = useParams();
  const [isFollowing, setIsFollowing] = React.useState(false);
  const [userIndicating, setUserIndicating] = React.useState();
  const [existUser, setExistUser] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const [userImageURL, setUserImageURL] = React.useState(DefaultUserImageURL);
  const store = Store.useStore();
  const currentUserDataModel = store.get('userDataModel');
  const userIndicatingUserId = userIndicating?.userId;
  const followApplicationService = new FollowApplicationService();

  // todo これ動的にする
  const tweetCount = 123123123;

  const toggleIsFollowing = () => {
    setIsFollowing(!isFollowing);
  };

  const follow = async () => {
    const currentUserId = currentUserDataModel?.userId;
    toggleIsFollowing();
    if (!currentUserId) return;
    await followApplicationService.follow(currentUserId, userIndicatingUserId);
  };

  const unFollow = async () => {
    const currentUserId = currentUserDataModel?.userId;
    toggleIsFollowing();
    if (!currentUserId) return;
    await followApplicationService.unFollow(
      currentUserId,
      userIndicatingUserId,
    );
  };

  useEffect(() => {
    (async () => {
      const userGotByScreenName = await UserApplicationService.getUserByScreenName(
        new ScreenName(screenNameRequested),
      ).catch((e) => e);
      if (!(userGotByScreenName instanceof UserDataModel)) {
        setExistUser(false);

        return;
      }
      const userImageURLInUser =
        userGotByScreenName.userImageURL || DefaultUserImageURL;
      setUserImageURL(userImageURLInUser);
      setExistUser(true);
      setUserIndicating(userGotByScreenName);
      setIsLoading(false);

      // setIsFollowing
      if (!currentUserDataModel) return;
      const isFollowingResponse = await followApplicationService.isFollowing(
        currentUserDataModel.userId,
        userIndicatingUserId,
      );
      if (isFollowingResponse.status === 400) return;
      const isFollowingJSON = await isFollowingResponse.json();
      setIsFollowing(isFollowingJSON);
    })();
  }, [currentUserDataModel]);

  return (
    <>
      {/* todo フォローボタンが編集ボタンにかわるようにする */}
      {currentUserDataModel instanceof UserDataModel &&
        currentUserDataModel?.userId === userIndicating?.userId &&
        console.log('自分のページです')}
      {existUser === false ? (
        <div>存在しないユーザーです(componentつくろう)</div>
      ) : isLoading ? (
        <div>Loaing...(componentつくろう)</div>
      ) : (
        <>
          <Header>
            <ProfileHeaderContent
              userDataModel={userIndicating}
              tweetCount={tweetCount}
            />
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
                  <UnFollowButton onClick={() => unFollow()}>
                    フォロー中
                  </UnFollowButton>
                </ButtonWrapper>
              ) : (
                <ButtonWrapper>
                  <FollowButton onClick={() => follow()}>フォロー</FollowButton>
                </ButtonWrapper>
              )}
            </ProfileUpperSection>
            <UserName>{userIndicating.userName}</UserName>
            <ScreenNameComponent>
              @{userIndicating.screenName}
            </ScreenNameComponent>
            <Bio>{userIndicating.bio}</Bio>
            <UserLocation>⛳{userIndicating.userLocation}</UserLocation>
            <CreatedAt>🗓XXXX年YY月からTwitterを利用しています</CreatedAt>
            <FollowingFollowerWrapper>
              <FollowCountUtil>{userIndicating.followingCount}</FollowCountUtil>
              <FollowDisplayUtil>フォロー中</FollowDisplayUtil>
              <FollowCountUtil>{userIndicating.followerCount}</FollowCountUtil>
              <FollowDisplayUtil>フォロワー</FollowDisplayUtil>
            </FollowingFollowerWrapper>
          </ProfileSection>
          <Footer />
        </>
      )}
    </>
  );
};
