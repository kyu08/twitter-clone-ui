import * as React from 'react';
import classes from './LoginForm.module.css';
import { InputContainer } from '../Common/InputContainer';
import { LinkToSignUp } from './LinkToSignUp';

type Props = {
  screenName: string;
  handleChangeScreenName(e: React.ChangeEvent<HTMLInputElement>): void;
  password: string;
  handleChangePassword(e: React.ChangeEvent<HTMLInputElement>): void;
  login(): void;
};

export const LoginForm: React.FC<Props> = (props) => {
  const {
    screenName,
    handleChangeScreenName,
    password,
    handleChangePassword,
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
            handleChangeValue={handleChangeScreenName}
          />
          <InputContainer
            labelTitle="パスワード"
            inputType="password"
            value={password}
            handleChangeValue={handleChangePassword}
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
