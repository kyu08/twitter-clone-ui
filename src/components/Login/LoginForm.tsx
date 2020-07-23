import * as React from 'react';
import classes from './LoginForm.module.css';
import { InputContainer } from './InputContainer';
import { LinkToSignUp } from './LinkToSignUp';

type Props = {
  screenName: string;
  handleScreenNameChange(e: React.ChangeEvent<HTMLInputElement>): void;
  password: string;
  handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>): void;
  login(): void;
};

export const LoginForm: React.FC<Props> = (props) => {
  const {
    screenName,
    handleScreenNameChange,
    password,
    handlePasswordChange,
    login,
  } = props;

  return (
    <>
      <div className={classes.ButtonContainer}>
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
          <input
            type="submit"
            className={classes.SubmitButton}
            value="ログイン"
            onClick={() => login()}
          />
          <LinkToSignUp />
        </form>
      </div>
    </>
  );
};
