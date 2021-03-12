import * as React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './Home/Common/Header';
import { ProfileHeaderContent } from './Profile/ProfileHeaderContent';
import Store from '../Store';
import { DefaultUserImageURL } from '../util/Util';
import { Footer } from './Home/Common/Footer';
import ScreenName from '../domain/models/User/Profile/ScreenName';
import { ProfileSection } from './Profile/ProfileSection';
import { FollowApplicationService } from '../applicationService/FollowApplicationService';
import UserApplicationService from '../applicationService/UserApplicationService';
import { UserDataModel } from '../applicationService/DTO/UserDataModel';

export const ProfileContainer: React.FC = () => {
  const { screenName: screenNameRequested } = useParams();
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

  const editProfile = () => {
    console.log('// todo imeplement edit profile.');
  };

  const follow = async () => {
    if (!currentUserId) return;
    await followApplicationService.follow(currentUserId, userIndicatingUserId);
  };

  const unFollow = async () => {
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
        .getUserByScreenName(new ScreenName(screenNameRequested))
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
    // currentUserId と userIndicatingIs がともに存在するなら処理続行
    if (!currentUserId || !userIndicatingUserId) return;

    //  自分のページなら isFollowing のチェックは行わない
    if (currentUserId === userIndicatingUserId) {
      setIsOwnPage(true);
    }
  }, [currentUserDataModel, userIndicatingUserId]);

  if (existUser === false)
    return <div>存在しないユーザーです(componentつくろう)</div>;

  if (isLoading || !currentUserDataModel)
    return <div>Loading...(componentつくろう)</div>;

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
        isOwnPage={isOwnPage}
        unFollow={unFollow}
        userIndicating={userIndicating}
        currentUserDataModel={currentUserDataModel}
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
