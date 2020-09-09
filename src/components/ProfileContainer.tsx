import * as React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './Home/Common/Header';
import { ProfileHeaderContent } from './Profile/ProfileHeaderContent';
import Store from '../Store';
import { DefaultUserImageURL } from '../util/Util';
import { Footer } from './Home/Common/Footer';
import UserApplicationService from '../application/UserApplicationService';
import ScreenName from '../domain/models/User/Profile/ScreenName';
import { UserDataModel } from '../infrastructure/UserDataModel';
import { FollowApplicationService } from '../application/FollowApplicationService';
import { FollowInfo, ProfileSection } from './Profile/ProfileSection';

export const ProfileContainer: React.FC = () => {
  const { screenName: screenNameRequested } = useParams();
  const [followInfo, setFollowInfo] = React.useState<FollowInfo>({
    isFollowing: false,
    isFollowed: false,
  });
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
  const userApplicationService = new UserApplicationService();

  const toggleIsFollowing = () => {
    if (!followInfo) return;
    const followInfoUpdated: FollowInfo = {
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
      const userGotByScreenName = await userApplicationService
        .getUserByScreenName(
          // todo new するのよくないかな
          new ScreenName(screenNameRequested),
        )
        .catch((e) => e);
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

  if (isLoading) return <div>Loading...(componentつくろう)</div>;

  return (
    <>
      <Header>
        <ProfileHeaderContent
          userDataModel={userIndicating}
          tweetCount={userIndicating.tweetCount}
        />
      </Header>
      <HeaderImage />
      <ProfileSection
        userImageURL={userImageURL}
        follow={follow}
        editProfile={editProfile}
        followInfo={followInfo}
        isOwnPage={isOwnPage}
        unFollow={unFollow}
        userIndicating={userIndicating}
      />
      <Footer />
    </>
  );
};

const HeaderImage = styled.div`
  background-color: grey;
  width: 100%;
  height: 124px;
`;
