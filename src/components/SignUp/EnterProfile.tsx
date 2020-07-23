import * as React from 'react';
import { Message } from '../Login/Message';
import classes from '../Login/LoginForm.module.css';
import { InputContainer } from '../Common/InputContainer';

type Props = {
  message: string;
  userName: string;
  screenName: string;
  handleUserNameChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleScreenNameChange(e: React.ChangeEvent<HTMLInputElement>): void;
  next(e: React.MouseEvent<HTMLInputElement>): void;
};

export const EnterProfile: React.FC<Props> = (props) => {
  const {
    message,
    userName,
    screenName,
    handleUserNameChange,
    handleScreenNameChange,
    next,
  } = props;

  return (
    <>
      <Message message={message} />
      <div className={classes.ButtonContainer}>
        <form>
          <InputContainer
            labelTitle="ユーザ名"
            inputType="text"
            value={userName}
            handleChangeValue={handleUserNameChange}
          />
          <InputContainer
            labelTitle="スクリーンネーム"
            inputType="text"
            value={screenName}
            handleChangeValue={handleScreenNameChange}
          />
          生年月日コンポーネントつくる
          {/* https://stackoverflow.com/questions/5812220/how-to-validate-a-date*/}
          <input
            type="submit"
            className={classes.SubmitButton}
            value="次へ"
            onClick={(e) => next(e)}
          />
        </form>
      </div>
    </>
  );
};
