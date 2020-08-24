import * as React from 'react';
import { Message } from '../Login/Message';
import classes from './EnterBio.module.css';
import { AlertMessage } from '../Login/AlertMessage';
import { InputForm } from '../Common/InputForm';
import { MAX_USER_LOCATION_LENGTH } from '../../domain/models/User/Profile/UserLocation';

type Props = {
  isValidUserLocation: boolean;
  userLocation: string;
  handleChangeUserLocation(e: React.ChangeEvent<HTMLInputElement>): void;
  goToNextPage(e: React.MouseEvent<HTMLInputElement>): void;
  backToPreviousPage(e: React.MouseEvent<HTMLInputElement>): void;
  canGoToPage5: boolean;
};

export const EnterUserLocation: React.FC<Props> = ({
  backToPreviousPage,
  canGoToPage5,
  goToNextPage,
  handleChangeUserLocation,
  isValidUserLocation,
  userLocation,
}) => {
  const alertMessage = `User Locationは1~${MAX_USER_LOCATION_LENGTH}文字で入力してください`;

  return (
    <div>
      <Message message="User Locationを入力してください 4/4" />
      <div className={classes.ButtonContainer}>
        {!isValidUserLocation && <AlertMessage alertMessage={alertMessage} />}
        <InputForm
          labelTitle="UserLocation"
          inputType="text"
          value={userLocation}
          handleChangeValue={handleChangeUserLocation}
        />
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
            value="次へ"
            onClick={(e) => goToNextPage(e)}
            disabled={!canGoToPage5}
          />
        </div>
      </div>
    </div>
  );
};
