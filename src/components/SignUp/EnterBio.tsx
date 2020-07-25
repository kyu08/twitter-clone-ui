import * as React from 'react';
import { Message } from '../Login/Message';
import classes from './EnterBio.module.css';
import { AlertMessage } from '../Login/AlertMessage';
import { InputContainer } from '../Common/InputContainer';
import { MAX_BIO_LENGTH } from '../../domain/models/User/Profile/Bio';

type Props = {
  goToNextPage(e: React.MouseEvent<HTMLInputElement>): void;
  backToPreviousPage(e: React.MouseEvent<HTMLInputElement>): void;
  isValidBio: boolean;
  bio: string;
  handleChangeBio(e: React.ChangeEvent<HTMLInputElement>): void;
  canGoToPage4: boolean;
};

export const EnterBio: React.FC<Props> = (props) => {
  const {
    backToPreviousPage,
    bio,
    canGoToPage4,
    goToNextPage,
    handleChangeBio,
    isValidBio,
  } = props;
  const alertMessage = `自己紹介は1~${MAX_BIO_LENGTH}文字で入力してください`;

  return (
    <div>
      <Message message="自己紹介を入力してください 3/3" />
      <div className={classes.ButtonContainer}>
        {!isValidBio && <AlertMessage alertMessage={alertMessage} />}
        <InputContainer
          labelTitle="自己紹介"
          inputType="text"
          value={bio}
          handleChangeValue={handleChangeBio}
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
            disabled={!canGoToPage4}
          />
        </div>
      </div>
    </div>
  );
};
