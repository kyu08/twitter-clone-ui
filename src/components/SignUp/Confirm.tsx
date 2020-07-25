import * as React from 'react';
import classes from './EnterBio.module.css';
import { Message } from '../Login/Message';

type Props = {
  goToNextPage(e: React.MouseEvent<HTMLInputElement>): void;
  backToPreviousPage(e: React.MouseEvent<HTMLInputElement>): void;
  userName: string;
  screenName: string;
  year: number;
  month: number;
  day: number;
  userImage: string;
  bio: string;
  userLocation: string;
};

export const Confirm: React.FC<Props> = (props) => {
  const {
    backToPreviousPage,
    bio,
    day,
    goToNextPage,
    month,
    screenName,
    userImage,
    userLocation,
    userName,
    year,
  } = props;

  return (
    <>
      <Message message="以下の内容でよろしいですか？" />
      <div>
        <span>screenName: {screenName}</span>
      </div>
      <div>
        <span>userName: {userName}</span>
      </div>
      <div>
        <span>
          Birthday: {year}/{month}/{day}
        </span>
      </div>
      <div>
        <span>userLocation: {userLocation}</span>
      </div>
      <div>
        <span>bio: {bio}</span>
      </div>
      <div>
        <img src={userImage} />
      </div>

      <div className={classes.SelectorContainer}>
        <input
          type="submit"
          className={classes.SubmitButton}
          value="戻る"
          onClick={(e) => backToPreviousPage(e)}
        />
        <input
          type="submit"
          className={classes.SubmitButton}
          value="登録"
          onClick={() => console.log('とくろくする関数')}
        />
      </div>
    </>
  );
};
