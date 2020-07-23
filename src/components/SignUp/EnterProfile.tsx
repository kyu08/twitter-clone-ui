import * as React from 'react';
import { Message } from '../Login/Message';
import classes from '../Login/LoginForm.module.css';
import { InputContainer } from '../Common/InputContainer';
import { SelectDate } from './SelectDate';

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

  const [year, setYear] = React.useState(2020);
  const [month, setMonth] = React.useState(1);
  const [day, setDay] = React.useState(1);

  const isLeapYear = (y: number): boolean => {
    return y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0);
  };

  const lastDay = (y: number, m: number): number => {
    if (isLeapYear(y) && m === 2) return 29;

    const lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return lastDays[m - 1];
  };

  const isValidDate = (y: number, m: number, d: number): boolean => {
    return d <= lastDay(y, m);
  };

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
          <SelectDate />
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
