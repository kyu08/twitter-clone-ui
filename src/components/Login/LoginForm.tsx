import * as React from 'react';
import classes from './LoginForm.module.css';
import { InvalidLogin } from './InvalidLogin';
import { InputContainer } from './InputContainer';

type Props = {
  isInvalidLogin: boolean;
  screenName: string;
  handleScreenNameChange(e: React.ChangeEvent<HTMLInputElement>): void;
  password: string;
  handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>): void;
  login(): void;
};

export const LoginForm: React.FC<Props> = (props) => {
  const {
    isInvalidLogin,
    screenName,
    handleScreenNameChange,
    password,
    handlePasswordChange,
    login,
  } = props;

  return (
    <>
      {isInvalidLogin && <InvalidLogin />}
      <form>
        <InputContainer
          labelTitle="ユーザ名"
          inputType="text"
          value={screenName}
          handleChangeValue={handleScreenNameChange}
        />
        <InputContainer
          labelTitle="パスワード"
          inputType="password"
          value={password}
          handleChangeValue={handlePasswordChange}
        />
        <div className={classes.ButtonContainer}>
          <input
            type="submit"
            className={classes.SubmitButton}
            value="ログイン"
            onClick={() => login()}
          />
        </div>
      </form>
    </>
  );
};
