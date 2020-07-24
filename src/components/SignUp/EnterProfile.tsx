import * as React from 'react';
import { Message } from '../Login/Message';
import classes from './EnterProfile.module.css';
import { InputContainer } from '../Common/InputContainer';
import { SelectDate } from './SelectDate';
import { AlertMessage } from '../Login/AlertMessage';

type Props = {
  message: string;
  userName: string;
  screenName: string;
  handleUserNameChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleScreenNameChange(e: React.ChangeEvent<HTMLInputElement>): void;
  next(e: React.MouseEvent<HTMLInputElement>): void;
  isValidUserName: boolean;
  isValidDate: boolean;
  isValidScreenName: boolean;
  canGoNextPage: boolean;
  monthArray: number[];
  dayArray: number[];
  yearArray: number[];
  month: number;
  day: number;
  year: number;
  handleChangeMonth(e: React.ChangeEvent<HTMLSelectElement>): void;
  handleChangeDay(e: React.ChangeEvent<HTMLSelectElement>): void;
  handleChangeYear(e: React.ChangeEvent<HTMLSelectElement>): void;
};

export const EnterProfile: React.FC<Props> = (props) => {
  const {
    message,
    userName,
    screenName,
    handleUserNameChange,
    handleScreenNameChange,
    next,
    isValidDate,
    isValidUserName,
    isValidScreenName,
    canGoNextPage,
    monthArray,
    dayArray,
    yearArray,
    month,
    day,
    year,
    handleChangeMonth,
    handleChangeDay,
    handleChangeYear,
  } = props;

  return (
    <>
      <Message message={message} />
      <div className={classes.ButtonContainer}>
        <form>
          {!isValidUserName && (
            <AlertMessage alertMessage="ユーザ名は1~15文字で入力してください" />
          )}
          <InputContainer
            labelTitle="ユーザ名"
            inputType="text"
            value={userName}
            handleChangeValue={handleUserNameChange}
          />
          {!isValidScreenName && (
            <AlertMessage alertMessage="スクリーンネームは1~10文字で入力してください" />
          )}
          <InputContainer
            labelTitle="スクリーンネーム"
            inputType="text"
            value={screenName}
            handleChangeValue={handleScreenNameChange}
          />
          {!isValidDate && <AlertMessage alertMessage="不正な年月日です" />}
          <div className={classes.SelectorContainer}>
            <SelectDate
              labelTitle="月"
              optionArray={monthArray}
              handleChange={handleChangeMonth}
              optionNumber={month}
            />
            <SelectDate
              labelTitle="日"
              optionArray={dayArray}
              handleChange={handleChangeDay}
              optionNumber={day}
            />
            <SelectDate
              labelTitle="年"
              optionArray={yearArray}
              handleChange={handleChangeYear}
              optionNumber={year}
            />
          </div>
          <input
            type="submit"
            className={classes.SubmitButton}
            value="次へ"
            onClick={(e) => next(e)}
            disabled={!canGoNextPage}
          />
        </form>
      </div>
    </>
  );
};
