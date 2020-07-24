import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { Logo } from './Login/Logo';
import classes from './SignUp.module.css';
import { EnterProfile } from './SignUp/EnterProfile';
import { EnterUserImage } from './SignUp/EnterUserImage';

type Props = {
  isLogin: boolean;
};

// todo container と presentation にわけよう
export const SignUp: React.FC<Props> = (props) => {
  const { isLogin } = props;
  const [pageNumber, setPageNumber] = React.useState(1);

  const [userName, setUserName] = React.useState('');
  const [screenName, setScreenName] = React.useState('');

  const [year, setYear] = React.useState(2020);
  const [month, setMonth] = React.useState(1);
  const [day, setDay] = React.useState(1);
  const [isValidUserName, setIsValidUserName] = React.useState(true);
  const [isValidScreenName, setIsValidScreenName] = React.useState(true);
  const [canGoNextPage, setCanGoNextPage] = React.useState(false);

  const isLeapYear = (y: number): boolean => {
    return y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0);
  };

  const lastDay = (m: number, y: number): number => {
    if (isLeapYear(y) && m === 2) return 29;

    const lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return lastDays[m - 1];
  };

  const isValidDate = ({ m = month, d = day, y = year } = {}): boolean => {
    return d <= lastDay(m, y);
  };

  const judgeCanGoNextPage = ({
    isRightUserName = userName.length > 0 && userName.length <= 15,
    isRightScreenName = screenName.length > 0 && screenName.length <= 10,
    isRightDate = isValidDate(),
  }): void => {
    if (isRightUserName && isRightScreenName && isRightDate) {
      setCanGoNextPage(true);

      return;
    }
    setCanGoNextPage(false);
  };

  const handleChangeUserName = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const userNameEntering = e.currentTarget.value;
    setUserName(userNameEntering);

    let isValid;
    if (userNameEntering === '' || userNameEntering.length > 15) {
      isValid = false;
    } else {
      isValid = true;
    }
    setIsValidUserName(isValid);
    judgeCanGoNextPage({ isRightUserName: isValid });
  };

  const handleChangeScreenName = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const screenNameEntering = e.currentTarget.value;
    setScreenName(screenNameEntering);

    let isValid;
    if (screenNameEntering === '' || screenNameEntering.length > 15) {
      isValid = false;
    } else {
      isValid = true;
    }
    setIsValidScreenName(isValid);
    judgeCanGoNextPage({ isRightScreenName: isValid });
  };

  const next = (e: React.MouseEvent<HTMLInputElement>): void => {
    e.preventDefault();
    console.log(userName, screenName);
    setPageNumber(pageNumber + 1);
  };

  const handleChangeDay = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const dayEntered = Number(e.currentTarget.value);
    setDay(dayEntered);
    judgeCanGoNextPage({ isRightDate: isValidDate({ d: dayEntered }) });
  };

  const handleChangeMonth = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const monthEntered = Number(e.currentTarget.value);
    setMonth(monthEntered);
    judgeCanGoNextPage({ isRightDate: isValidDate({ m: monthEntered }) });
  };

  const handleChangeYear = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const yearEntered = Number(e.currentTarget.value);
    setYear(yearEntered);
    judgeCanGoNextPage({ isRightDate: isValidDate({ y: yearEntered }) });
  };

  // この辺は静的なデータだから presentation がもっててもいいかも？
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

  const newVar = (
    <>
      <>
        {isLogin && <Redirect to="/" />}
        <div className={classes.SignUp}>
          <Logo />
          {pageNumber === 1 && (
            <EnterProfile
              message="アカウントを作成 1/3"
              screenName={screenName}
              userName={userName}
              handleScreenNameChange={handleChangeScreenName}
              handleUserNameChange={handleChangeUserName}
              next={next}
              isValidDate={isValidDate()}
              isValidUserName={isValidUserName}
              isValidScreenName={isValidScreenName}
              canGoNextPage={canGoNextPage}
              monthArray={generateMonthArray()}
              dayArray={generateDayArray()}
              yearArray={generateYearArray()}
              month={month}
              day={day}
              year={year}
              handleChangeMonth={handleChangeMonth}
              handleChangeDay={handleChangeDay}
              handleChangeYear={handleChangeYear}
            />
          )}
          {pageNumber === 2 && (
            // <div>aaaa</div>
            <EnterUserImage />
            // <EnterProfile
            //   message="プロフィール画像を選ぶ 2/3"
            //   screenName={screenName}
            //   userName={userName}
            //   handleScreenNameChange={handleScreenNameChange}
            //   handleUserNameChange={handleUserNameChange}
            //   next={next}
            // />
          )}
        </div>
      </>
    </>
  );

  return newVar;
};
