import * as React from 'react';
import styled from 'styled-components';
import { Message } from '../Login/Message';
import { AlertMessage } from '../Login/AlertMessage';
import { InputForm } from '../Common/InputForm';
import { MAX_BIO_LENGTH } from '../../domain/models/User/Profile/Bio';

type Props = {
  goToNextPage(e: React.MouseEvent<HTMLInputElement>): void;
  backToPreviousPage(e: React.MouseEvent<HTMLInputElement>): void;
  isValidBio: boolean;
  bio: string;
  handleChangeBio(e: React.ChangeEvent<HTMLInputElement>): void;
  canGoToPage4: boolean;
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

export const EnterBio: React.FC<Props> = ({
  backToPreviousPage,
  bio,
  canGoToPage4,
  goToNextPage,
  handleChangeBio,
  isValidBio,
}) => {
  const alertMessage = `自己紹介は1~${MAX_BIO_LENGTH}文字で入力してください`;

  return (
    <div>
      <Message message="自己紹介を入力してください 3/4" />
      <ButtonContainer>
        {!isValidBio && <AlertMessage alertMessage={alertMessage} />}
        <InputForm
          labelTitle="自己紹介"
          inputType="text"
          value={bio}
          handleChangeValue={handleChangeBio}
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
            disabled={!canGoToPage4}
          />
        </SelectorContainer>
      </ButtonContainer>
    </div>
  );
};
