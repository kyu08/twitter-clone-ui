import * as React from 'react';
import styled from 'styled-components';
import { Message } from '../Login/Message';

type Props = {
  backToPreviousPage(e: React.MouseEvent<HTMLInputElement>): void;
  userName: string;
  screenName: string;
  year: number;
  month: number;
  day: number;
  // todo これ string でいいのかな
  userImage: string;
  bio: string;
  userLocation: string;
  password: string;
};

const SelectorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

// これ共通化する？
const SubmitButton = styled.input`
  width: 49%;
  height: 50px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 60px;
  background-color: #1da1f2;
  color: white;
  border: none;
`;

export const Confirm: React.FC<Props> = ({
  backToPreviousPage,
  bio,
  day,
  month,
  screenName,
  userImage,
  userLocation,
  userName,
  year,
  password,
}) => {
  return (
    <>
      <Message message="以下の内容でよろしいですか？" />
      <div>
        <span>screenName: {screenName}</span>
      </div>
      <div>
        <span>userName: {userName}</span>
      </div>
      <div>
        <span>password: {password}</span>
      </div>
      <div>
        <span>
          Birthday: {year}/{month}/{day}
        </span>
      </div>
      <div>
        <span>userLocation: {userLocation}</span>
      </div>
      <div>
        <span>bio: {bio}</span>
      </div>
      <div>
        <img src={userImage} alt="UserImage preview" />
      </div>
      <SelectorContainer>
        <SubmitButton
          type="submit"
          value="戻る"
          onClick={(e) => backToPreviousPage(e)}
        />
        <SubmitButton
          type="submit"
          value="登録"
          onClick={() => console.log('とくろくする関数をここにアレする')}
        />
      </SelectorContainer>
    </>
  );
};
