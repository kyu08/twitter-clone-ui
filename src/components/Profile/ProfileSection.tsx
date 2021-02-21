import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserImageSection } from '../Home/Tweet/UserImageSection';
import { LinkStyle } from '../../util/Util';
import { UserDataModel } from '../../infrastructure/UserDataModel';
import UserApplicationService from '../../application/UserApplicationService';

type Props = {
  userImageURL: string;
  isOwnPage: boolean;
  userIndicating: UserDataModel;
  currentUserDataModel: UserDataModel;
  editProfile(): void;
  unFollow(): Promise<void>;
  follow(): Promise<void>;
};

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
      {/* ここから ProfileUpperSection component*/}
      <ProfileUpperSection>
        <UserImageSection
          imageSize={IMAGE_SIZE}
          userImageURL={userImageURL}
          screenName={userIndicating.screenName}
        />
        /* TODO ここから component として切り出す */
        {isOwnPage ? (
          <ButtonWrapper>
            <EditProfileButton onClick={() => editProfile()}>
              プロフィールを編集
            </EditProfileButton>
          </ButtonWrapper>
        ) : userApplicationService.isFollowing(
            currentUserDataModel,
            userIndicating,
          ) ? (
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
        /* TODO ここまで component として切り出す */
      </ProfileUpperSection>
      {/* ここまで ProfileUpperSection component*/}
      <UserName>{userIndicating.userName}</UserName>
      <ScreenNameComponent>@{userIndicating.screenName}</ScreenNameComponent>
      {userApplicationService.isFollowed(
        currentUserDataModel,
        userIndicating,
      ) && <IsFollowedComponent>フォローされています</IsFollowedComponent>}
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
