import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserImageSection } from '../Home/Tweet/UserImageSection';
import { LinkStyle } from '../../util/Util';
import { UserDataModel } from '../../infrastructure/UserDataModel';
import UserApplicationService from '../../application/UserApplicationService';
import { ProfileButton } from './ProfileButton';

type Props = {
  userImageURL: string;
  isOwnPage: boolean;
  userIndicating: UserDataModel;
  currentUserDataModel: UserDataModel;
  editProfile(): void;
  unFollow(): Promise<void>;
  follow(): Promise<void>;
};

// TODO JSX もりもりなのでもう少し component として切り出すか...?
export const ProfileSection: React.FC<Props> = (props) => {
  const {
    userImageURL,
    isOwnPage,
    userIndicating,
    currentUserDataModel,
    editProfile,
    unFollow,
    follow,
  } = props;
  const IMAGE_SIZE = 84;
  const userApplicationService = new UserApplicationService();

  return (
    <ProfileSectionWrapper>
      <ProfileUpperSection>
        <UserImageSection
          imageSize={IMAGE_SIZE}
          userImageURL={userImageURL}
          screenName={userIndicating.screenName}
        />
        <ProfileButton
          isOwnPage={isOwnPage}
          editProfile={editProfile}
          follow={follow}
          unFollow={unFollow}
          currentUserDataModel={currentUserDataModel}
          userIndicating={userIndicating}
        />
      </ProfileUpperSection>
      <UserName>{userIndicating.userName}</UserName>
      <ScreenNameComponent>@{userIndicating.screenName}</ScreenNameComponent>
      {/* TODO component として切り出す */}
      {userApplicationService.isFollowed(
        currentUserDataModel,
        userIndicating,
      ) && <IsFollowedComponent>フォローされています</IsFollowedComponent>}
      {/* TODO component として切り出す */}
      <Bio>{userIndicating.bio}</Bio>
      <UserLocation>⛳ {userIndicating.userLocation}</UserLocation>
      <CreatedAt>🗓 XXXX年YY月からTwitterを利用しています</CreatedAt>
      <FollowingFollowerWrapper>
        <Link to={`/${userIndicating.screenName}/following`} style={LinkStyle}>
          <FollowCountUtil>
            {userApplicationService.getFollowingCount(userIndicating)}
          </FollowCountUtil>
          <FollowDisplayUtil>フォロー中</FollowDisplayUtil>
        </Link>
        <FollowCountUtil>
          {userApplicationService.getFollowerCount(userIndicating)}
        </FollowCountUtil>
        <FollowDisplayUtil>フォロワー</FollowDisplayUtil>
      </FollowingFollowerWrapper>
    </ProfileSectionWrapper>
  );
};

const ProfileUpperSection = styled.div`
  position: absolute;
  top: 137px;
  left: 5px;
  display: flex;
  width: 100%;
`;

const ProfileSectionWrapper = styled.div`
  min-height: 235px;
  padding: 10px 15px 10px;
  border-bottom: solid 1px rgb(136, 153, 166);
  word-break: break-all;
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
