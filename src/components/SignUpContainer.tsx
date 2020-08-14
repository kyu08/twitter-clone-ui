import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { Logo } from './Login/Logo';
import classes from './SignUpContainer.module.css';
import { EnterProfile } from './SignUp/EnterProfile';
import { EnterUserImage } from './SignUp/EnterUserImage';
import { EnterBio } from './SignUp/EnterBio';
import DefaultUserImage from './SignUp/user-image.png';
import { MAX_BIO_LENGTH } from '../domain/models/User/Profile/Bio';
import { EnterUserLocation } from './SignUp/EnterUserLocation';
import { MAX_USER_LOCATION_LENGTH } from '../domain/models/User/Profile/UserLocation';
import { Confirm } from './SignUp/Confirm';
import { MAX_SCREEN_NAME_LENGTH } from '../domain/models/User/Profile/ScreenName';
import { MAX_USER_NAME_LENGTH } from '../domain/models/User/Profile/UserName';
import { TODO } from '../util/Util';

type Props = {
  isLogin: boolean;
};

// todo container と presentation にわけよう
export const SignUpContainer: React.FC<Props> = (props) => {
  const { isLogin } = props;

  // State

  // Common
  const [pageNumber, setPageNumber] = React.useState<number>(1);

  // EnterProfile
  const [userName, setUserName] = React.useState<string>('');
  const [screenName, setScreenName] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [year, setYear] = React.useState<number>(2020);
  const [month, setMonth] = React.useState<number>(1);
  const [day, setDay] = React.useState<number>(1);
  const [isValidUserName, setIsValidUserName] = React.useState<boolean>(true);
  const [isValidScreenName, setIsValidScreenName] = React.useState<boolean>(
    true,
  );
  const [isValidPassword, setIsValidPassword] = React.useState<boolean>(true);
  const [canGoNextPage, setCanGoNextPage] = React.useState<boolean>(false);

  // SelectUserImage
  const [userImage, setUserImage] = React.useState<TODO<'userimage'>>(
    DefaultUserImage,
  );
  const [canGoToPage3, setCanGoToPage3] = React.useState<boolean>(false);

  // EnterBio
  const [bio, setBio] = React.useState<string>('');
  const [isValidBio, setIsValidBio] = React.useState<boolean>(true);
  const [canGoToPage4, setCanGoToPage4] = React.useState<boolean>(false);

  // EnterUserLocation
  const [userLocation, setUserLocation] = React.useState<string>('');
  const [isValidUserLocation, setIsValidUserLocation] = React.useState<boolean>(
    true,
  );
  const [canGoToPage5, setCanGoToPage5] = React.useState<boolean>(false);

  // Functions

  // Common
  const goToNextPage = (e: React.MouseEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setPageNumber(pageNumber + 1);
  };

  const backToPreviousPage = (e: React.MouseEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setPageNumber(pageNumber - 1);
  };

  // todo #154 この辺はドメイン知識な気もする ProfileService とか？
  // todo #157 TempUserService あたりに書こう
  // for EnterProfile.tsx
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
    // isValidHoge はあくまでエラーメッセージコンポーネントを表示するためのフラグなのでここで改めて判定する必要がある。
    isRightUserName = userName.length > 0 &&
      userName.length <= MAX_USER_NAME_LENGTH,
    isRightScreenName = screenName.length > 0 &&
      screenName.length <= MAX_SCREEN_NAME_LENGTH,
    isRightPassword = password.length > 0 && password.length <= 10,
    isRightDate = isValidDate(),
  }): void => {
    if (
      isRightUserName &&
      isRightScreenName &&
      isRightPassword &&
      isRightDate
    ) {
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
    // todo #154 ドメイン知識なので分離しよう
    // todo #157 TempUserService あたりに書こう
    if (
      userNameEntering === '' ||
      userNameEntering.length > MAX_SCREEN_NAME_LENGTH
    ) {
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
    // todo #154 ドメイン知識なので分離しよう
    // todo #157 TempUserService あたりに書こう
    if (
      screenNameEntering === '' ||
      screenNameEntering.length > MAX_SCREEN_NAME_LENGTH
    ) {
      isValid = false;
    } else {
      isValid = true;
    }
    setIsValidScreenName(isValid);
    judgeCanGoNextPage({ isRightScreenName: isValid });
  };

  const handleChangePassword = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const passwordEntering = e.currentTarget.value;
    setPassword(passwordEntering);

    let isValid;
    // todo #154 ドメイン知識なので分離しよう
    // todo #157 TempUserService あたりに書こう
    if (passwordEntering === '' || passwordEntering.length > 10) {
      isValid = false;
    } else {
      isValid = true;
    }
    setIsValidPassword(isValid);
    judgeCanGoNextPage({ isRightPassword: isValid });
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

  // todo #154 この辺はドメイン知識な気もする ProfileService とか？
  // todo #157 TempUserService あたりに書こう
  // isLeapYear とかと一緒に分離しよう
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

  // for EnterUserImage.tsx
  const selectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    // @ts-ignore
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event) => {
      // @ts-ignore
      setUserImage(reader.result);
      // setUserImage(event.target.result);
      setCanGoToPage3(true);
    };
  };

  // for EnterBio.tsx
  const handleChangeBio = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const bioEntering = e.currentTarget.value;
    setBio(bioEntering);
    let isValid;
    // todo #154 ドメイン知識なので分離しよう
    // todo #157 TempUserService あたりに書こう
    if (bioEntering.length > 0 && bioEntering.length < MAX_BIO_LENGTH) {
      isValid = true;
    } else {
      isValid = false;
    }
    setIsValidBio(isValid);
    setCanGoToPage4(isValid);
  };

  // EnterUserLocation
  const handleChangeUserLocation = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const userLocationEntering = e.currentTarget.value;
    setUserLocation(userLocationEntering);
    let isValid;
    // todo #154 ドメイン知識なので分離しよう
    // todo #157 TempUserService あたりに書こう
    if (
      userLocationEntering.length > 0 &&
      userLocationEntering.length < MAX_USER_LOCATION_LENGTH
    ) {
      isValid = true;
    } else {
      isValid = false;
    }
    setIsValidUserLocation(isValid);
    setCanGoToPage5(isValid);
  };

  // for Confirm.tsx

  const convertPassword = (): string => {
    const passwordArray = password.split('');

    return passwordArray.map(() => '*').join('');
  };

  return (
    <>
      <>
        {isLogin && <Redirect to="/" />}
        <div className={classes.SignUp}>
          <Logo />
          {pageNumber === 1 && (
            <EnterProfile
              goToNextPage={goToNextPage}
              canGoNextPage={canGoNextPage}
              screenName={screenName}
              handleChangeScreenName={handleChangeScreenName}
              isValidScreenName={isValidScreenName}
              userName={userName}
              handleChangeUserName={handleChangeUserName}
              isValidUserName={isValidUserName}
              year={year}
              month={month}
              day={day}
              monthArray={generateMonthArray()}
              dayArray={generateDayArray()}
              yearArray={generateYearArray()}
              handleChangeMonth={handleChangeMonth}
              handleChangeDay={handleChangeDay}
              handleChangeYear={handleChangeYear}
              isValidDate={isValidDate()}
              password={password}
              handleChangePassword={handleChangePassword}
              isValidPassword={isValidPassword}
            />
          )}
          {pageNumber === 2 && (
            <EnterUserImage
              backToPreviousPage={backToPreviousPage}
              goToNextPage={goToNextPage}
              userImage={userImage}
              canGoToPage3={canGoToPage3}
              selectImage={selectImage}
            />
          )}
          {pageNumber === 3 && (
            <EnterBio
              goToNextPage={goToNextPage}
              backToPreviousPage={backToPreviousPage}
              bio={bio}
              canGoToPage4={canGoToPage4}
              handleChangeBio={handleChangeBio}
              isValidBio={isValidBio}
            />
          )}
          {pageNumber === 4 && (
            <EnterUserLocation
              goToNextPage={goToNextPage}
              backToPreviousPage={backToPreviousPage}
              canGoToPage5={canGoToPage5}
              handleChangeUserLocation={handleChangeUserLocation}
              isValidUserLocation={isValidUserLocation}
              userLocation={userLocation}
            />
          )}
          {pageNumber === 5 && (
            <Confirm
              backToPreviousPage={backToPreviousPage}
              bio={bio}
              userImage={userImage}
              year={year}
              day={day}
              month={month}
              userName={userName}
              screenName={screenName}
              userLocation={userLocation}
              password={convertPassword()}
            />
          )}
        </div>
      </>
    </>
  );
};
