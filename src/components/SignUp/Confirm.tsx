import * as React from 'react';
import classes from './EnterBio.module.css';
import { Message } from '../Login/Message';

type Props = {
  backToPreviousPage(e: React.MouseEvent<HTMLInputElement>): void;
  userName: string;
  screenName: string;
  year: number;
  month: number;
  day: number;
  // todo これ string でいいのかな
  userImage: string;
  bio: string;
  userLocation: string;
  password: string;
};

export const Confirm: React.FC<Props> = ({
  backToPreviousPage,
  bio,
  day,
  month,
  screenName,
  userImage,
  userLocation,
  userName,
  year,
  password,
}) => {
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
        <span>password: {password}</span>
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
        <img src={userImage} alt="UserImage preview" />
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
          onClick={() => console.log('とくろくする関数をここにアレする')}
        />
      </div>
    </>
  );
};
