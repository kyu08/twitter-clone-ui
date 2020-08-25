import * as React from 'react';
import styled from 'styled-components';
import { InputForm } from '../Common/InputForm';
import { LinkToSignUp } from './LinkToSignUp';

type Props = {
  screenName: string;
  handleChangeScreenName(e: React.ChangeEvent<HTMLInputElement>): void;
  password: string;
  handleChangePassword(e: React.ChangeEvent<HTMLInputElement>): void;
  login(): void;
};

const SubmitButton = styled.input`
  width: 100%;
  height: 50px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 60px;
  background-color: #1da1f2;
  color: white;
  border: none;
`;

const ButtonContainer = styled.div`
  margin: 20px auto;
  width: 315px;
`;

export const LoginForm: React.FC<Props> = ({
  screenName,
  handleChangeScreenName,
  password,
  handleChangePassword,
  login,
}) => {
  return (
    <>
      <ButtonContainer>
        <form>
          <InputForm
            labelTitle="ユーザ名"
            inputType="text"
            value={screenName}
            handleChangeValue={handleChangeScreenName}
          />
          <InputForm
            labelTitle="パスワード"
            inputType="password"
            value={password}
            handleChangeValue={handleChangePassword}
          />
          <SubmitButton
            type="submit"
            value="ログイン"
            onClick={() => login()}
          />
          <LinkToSignUp />
        </form>
      </ButtonContainer>
    </>
  );
};
