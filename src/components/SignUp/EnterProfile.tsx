import * as React from 'react';
import { Message } from '../Login/Message';
import classes from './EnterProfile.module.css';
import { InputForm } from '../Common/InputForm';
import { SelectDate } from './SelectDate';
import { AlertMessage } from '../Login/AlertMessage';

type Props = {
  userName: string;
  screenName: string;
  password: string;
  handleChangeUserName(e: React.ChangeEvent<HTMLInputElement>): void;
  handleChangeScreenName(e: React.ChangeEvent<HTMLInputElement>): void;
  handleChangePassword(e: React.ChangeEvent<HTMLInputElement>): void;
  goToNextPage(e: React.MouseEvent<HTMLInputElement>): void;
  isValidUserName: boolean;
  isValidPassword: boolean;
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

export const EnterProfile: React.FC<Props> = ({
  userName,
  screenName,
  goToNextPage,
  isValidDate,
  isValidUserName,
  isValidScreenName,
  isValidPassword,
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
  password,
  handleChangePassword,
  handleChangeScreenName,
  handleChangeUserName,
}) => {
  const message = 'アカウントを作成 1/4';

  return (
    <>
      <Message message={message} />
      <div className={classes.ButtonContainer}>
        <form>
          {!isValidUserName && (
            <AlertMessage alertMessage="ユーザ名は1~15文字で入力してください" />
          )}
          <InputForm
            labelTitle="ユーザ名"
            inputType="text"
            value={userName}
            handleChangeValue={handleChangeUserName}
          />
          {!isValidScreenName && (
            <AlertMessage alertMessage="スクリーンネームは1~10文字で入力してください" />
          )}
          <InputForm
            labelTitle="スクリーンネーム"
            inputType="text"
            value={screenName}
            handleChangeValue={handleChangeScreenName}
          />
          {!isValidPassword && (
            <AlertMessage alertMessage="パスワードは1~10文字で入力してください" />
          )}
          <InputForm
            labelTitle="パスワード"
            inputType="password"
            value={password}
            handleChangeValue={handleChangePassword}
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
            onClick={(e) => goToNextPage(e)}
            disabled={!canGoNextPage}
          />
        </form>
      </div>
    </>
  );
};
