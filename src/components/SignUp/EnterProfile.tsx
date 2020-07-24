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

  const handleChangeDay = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const dayEntered = Number(e.currentTarget.value);
    setDay(dayEntered);
  };

  const handleChangeMonth = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const monthEntered = Number(e.currentTarget.value);
    setMonth(monthEntered);
  };

  const handleChangeYear = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const yearEntered = Number(e.currentTarget.value);
    setYear(yearEntered);
  };

  const isLeapYear = (y: number): boolean => {
    return y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0);
  };

  const lastDay = (y: number, m: number): number => {
    if (isLeapYear(y) && m === 2) return 29;

    const lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return lastDays[m - 1];
  };

  const isValidDate = (): boolean => {
    return day <= lastDay(year, month);
  };

  const generateMonthArray = (): number[] => {
    return [...Array(12).keys()].map((e) => e + 1);
  };

  const generateDayArray = (): number[] => {
    return [...Array(31).keys()].map((e) => e + 1);
  };

  const generateYearArray = (): number[] => {
    const arrayLength = new Date().getFullYear() - 1900 + 1;

    return [...Array(arrayLength).keys()].map((e) => e + 1900);
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
          {!isValidDate() && <AlertMessage alertMessage="不正な年月日です" />}
          <div className={classes.SelectorContainer}>
            <SelectDate
              labelTitle="月"
              optionArray={generateMonthArray()}
              handleChange={handleChangeMonth}
              optionNumber={month}
            />
            <SelectDate
              labelTitle="日"
              optionArray={generateDayArray()}
              handleChange={handleChangeDay}
              optionNumber={day}
            />
            <SelectDate
              labelTitle="年"
              optionArray={generateYearArray()}
              handleChange={handleChangeYear}
              optionNumber={year}
            />
          </div>
          <input
            type="submit"
            className={classes.SubmitButton}
            value="次へ"
            onClick={(e) => next(e)}
            disabled={!isValidDate()}
          />
        </form>
      </div>
    </>
  );
};
