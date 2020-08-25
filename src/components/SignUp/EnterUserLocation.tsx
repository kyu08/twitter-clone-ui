import * as React from 'react';
import styled from 'styled-components';
import { Message } from '../Login/Message';
import { AlertMessage } from '../Login/AlertMessage';
import { InputForm } from '../Common/InputForm';
import { MAX_USER_LOCATION_LENGTH } from '../../domain/models/User/Profile/UserLocation';

type Props = {
  isValidUserLocation: boolean;
  userLocation: string;
  handleChangeUserLocation(e: React.ChangeEvent<HTMLInputElement>): void;
  goToNextPage(e: React.MouseEvent<HTMLInputElement>): void;
  backToPreviousPage(e: React.MouseEvent<HTMLInputElement>): void;
  canGoToPage5: boolean;
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
  :disabled {
    background: rgb(31, 96, 142);
    color: rgb(136, 153, 166);
  }
`;

const ButtonContainer = styled.div`
  margin: 20px auto;
  width: 315px;
`;

export const EnterUserLocation: React.FC<Props> = ({
  backToPreviousPage,
  canGoToPage5,
  goToNextPage,
  handleChangeUserLocation,
  isValidUserLocation,
  userLocation,
}) => {
  const alertMessage = `User Locationは1~${MAX_USER_LOCATION_LENGTH}文字で入力してください`;

  return (
    <div>
      <Message message="User Locationを入力してください 4/4" />
      <ButtonContainer>
        {!isValidUserLocation && <AlertMessage alertMessage={alertMessage} />}
        <InputForm
          labelTitle="UserLocation"
          inputType="text"
          value={userLocation}
          handleChangeValue={handleChangeUserLocation}
        />
        <SelectorContainer>
          <SubmitButton
            type="submit"
            value="戻る"
            onClick={(e) => backToPreviousPage(e)}
          />
          <SubmitButton
            type="submit"
            value="次へ"
            onClick={(e) => goToNextPage(e)}
            disabled={!canGoToPage5}
          />
        </SelectorContainer>
      </ButtonContainer>
    </div>
  );
};
