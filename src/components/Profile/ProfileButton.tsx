import * as React from 'react';
import styled from 'styled-components';
import UserApplicationService from '../../application/UserApplicationService';
import { UserDataModel } from '../../infrastructure/UserDataModel';

type Props = {
  isOwnPage: boolean;
  editProfile(): void;
  unFollow(): Promise<void>;
  follow(): Promise<void>;
  currentUserDataModel: UserDataModel;
  userIndicating: UserDataModel;
};

export const ProfileButton: React.FC<Props> = ({
  isOwnPage,
  editProfile,
  unFollow,
  follow,
  currentUserDataModel,
  userIndicating,
}) => {
  const userApplicationService = new UserApplicationService();

  return (
    <>
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
          <UnFollowButton onClick={() => unFollow()}>フォロー中</UnFollowButton>
        </ButtonWrapper>
      ) : (
        <ButtonWrapper>
          <FollowButton onClick={() => follow()}>フォロー</FollowButton>
        </ButtonWrapper>
      )}
    </>
  );
};

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
