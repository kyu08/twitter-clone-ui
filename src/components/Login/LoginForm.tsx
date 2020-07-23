import * as React from 'react';
import classes from './LoginForm.module.css';
import { InputContainer } from './InputContainer';

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
