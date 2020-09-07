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
import UserId from '../domain/models/User/UserId/UserId';

// todo ある程度できたら presentation component を分離していこう

const IMAGE_SIZE = 84;

const ProfileUpperSection = styled.div`
  position: absolute;
  top: 137px;
  left: 5px;
  display: flex;
  width: 100%;
`;

const HeaderImage = styled.div`
  background-color: grey;
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

const EditProfileButton = styled.button`
  color: #1da1f2;
  background-color: rgba(0, 0, 0, 0);
  ${ButtonUtil}
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

const ScreenNameComponent = styled.span`
  color: #8899a6;
  font-size: 16px;
`;

const IsFollowedComponent = styled.span`
  margin-left: 5px;
  color: #8899a6;
  font-size: 13px;
  background-color: #282c34;
  border-radius: 5px;
  padding: 2px 2px;
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

type FollowInfo = {
  isFollowing: boolean;
  isFollowed: boolean;
};

export const ProfileContainer: React.FC = () => {
  const { screenName: screenNameRequested } = useParams();
  const [followInfo, setFollowInfo] = React.useState<FollowInfo>();
  const [userIndicating, setUserIndicating] = React.useState();
  const [existUser, setExistUser] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const [userImageURL, setUserImageURL] = React.useState(DefaultUserImageURL);
  const [isOwnPage, setIsOwnPage] = React.useState(false);
  const store = Store.useStore();
  const currentUserDataModel = store.get('userDataModel');
  const userIndicatingUserId = userIndicating?.userId;
  const currentUserId = currentUserDataModel?.userId;
  const followApplicationService = new FollowApplicationService();

  const toggleIsFollowing = () => {
    if (!followInfo) return;
    const followInfoUpdated = {
      ...followInfo,
      ...{ isFollowing: !followInfo.isFollowing },
    };
    setFollowInfo(followInfoUpdated);
  };

  const editProfile = () => {
    console.log('// todo imeplement edit profile.');
  };

  const follow = async () => {
    toggleIsFollowing();
    if (!currentUserId) return;
    await followApplicationService.follow(currentUserId, userIndicatingUserId);
  };

  const unFollow = async () => {
    toggleIsFollowing();
    if (!currentUserId) return;
    await followApplicationService.unFollow(
      currentUserId,
      userIndicatingUserId,
    );
  };

  // setUserIndicating
  useEffect(() => {
    (async () => {
      if (!currentUserId) return;
      const userGotByScreenName = await UserApplicationService.getUserByScreenName(
        // todo new するのよくないよね
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
    })();
  }, [currentUserId]);

  // setIsFollowing
  useEffect(() => {
    (async () => {
      // currentUserId と userIndicatingIs がともに存在するなら処理続行
      if (!currentUserId || !userIndicatingUserId) return;

      //  自分のページなら isFollowing のチェックは行わない
      if (currentUserId === userIndicatingUserId) {
        setIsOwnPage(true);

        return;
      }

      if (!currentUserDataModel) return;
      const followInfoResponse = await followApplicationService.isFollowing(
        currentUserId,
        userIndicatingUserId,
      );
      if (!followInfoResponse.ok) return;
      const followInfoJSON = await followInfoResponse.json();
      setFollowInfo(followInfoJSON);
    })();
  }, [currentUserDataModel, userIndicatingUserId]);

  if (existUser === false)
    return <div>存在しないユーザーです(componentつくろう)</div>;

  if (isLoading) return <div>Loaing...(componentつくろう)</div>;

  return (
    <>
      <Header>
        <ProfileHeaderContent
          userDataModel={userIndicating}
          tweetCount={userIndicating.tweetCount}
        />
      </Header>
      <HeaderImage />
      <ProfileSection>
        {/* ここから ProfileUpperSection component*/}
        <ProfileUpperSection>
          <UserImageSection
            imageSize={IMAGE_SIZE}
            userImageURL={userImageURL}
          />
          {isOwnPage ? (
            <ButtonWrapper>
              <EditProfileButton onClick={() => editProfile()}>
                プロフィールを編集
              </EditProfileButton>
            </ButtonWrapper>
          ) : followInfo?.isFollowing ? (
            <ButtonWrapper>
              <UnFollowButton onClick={() => unFollow()} disabled={isOwnPage}>
                フォロー中
              </UnFollowButton>
            </ButtonWrapper>
          ) : (
            <ButtonWrapper>
              <FollowButton onClick={() => follow()} disabled={isOwnPage}>
                フォロー
              </FollowButton>
            </ButtonWrapper>
          )}
        </ProfileUpperSection>
        {/* ここまで ProfileUpperSection component*/}
        <UserName>{userIndicating.userName}</UserName>
        <ScreenNameComponent>@{userIndicating.screenName}</ScreenNameComponent>
        {followInfo?.isFollowed ? (
          <IsFollowedComponent>フォローされています</IsFollowedComponent>
        ) : null}
        <Bio>{userIndicating.bio}</Bio>
        <UserLocation>⛳ {userIndicating.userLocation}</UserLocation>
        <CreatedAt>🗓 XXXX年YY月からTwitterを利用しています</CreatedAt>
        <FollowingFollowerWrapper>
          <FollowCountUtil>{userIndicating.followingCount}</FollowCountUtil>
          <FollowDisplayUtil>フォロー中</FollowDisplayUtil>
          <FollowCountUtil>{userIndicating.followerCount}</FollowCountUtil>
          <FollowDisplayUtil>フォロワー</FollowDisplayUtil>
        </FollowingFollowerWrapper>
      </ProfileSection>
      <Footer />
    </>
  );
};
