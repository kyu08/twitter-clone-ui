import * as React from 'react';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import { Message } from '../Login/Message';
import classes from './EnterUserImage.module.css';
import DefaultUserImage from './user-image.png';

type Props = {
  goToNextPage(e: React.MouseEvent<HTMLInputElement>): void;
  backToPreviousPage(e: React.MouseEvent<HTMLInputElement>): void;
};

export const EnterUserImage: React.FC<Props> = (props) => {
  const { backToPreviousPage, goToNextPage } = props;
  const [userImage, setUserImage] = React.useState(DefaultUserImage);

  const test = (e: any) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      // @ts-ignore
      setUserImage(event.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div>
      <Message message="プロフォール画像を選ぶ 2/3" />
      <div className={classes.ButtonContainer}>
        <div className={classes.FileInputContainer}>
          <img src={userImage} className={classes.DefaultUserImage} />
          <label className={classes.InputLabel}>
            <AddAPhotoOutlinedIcon />
            <input
              className={classes.FileInput}
              type="file"
              id="upload_chat"
              name="file"
              onChange={(e) => test(e)}
            />
          </label>
        </div>
        <div className={classes.SelectorContainer}>
          <input
            type="submit"
            className={classes.SubmitButton}
            value="戻る"
            onClick={(e) => backToPreviousPage(e)}
            // disabled={!canGoNextPage}
          />
          <input
            type="submit"
            className={classes.SubmitButton}
            value="次へ"
            onClick={(e) => goToNextPage(e)}
            // disabled={!canGoNextPage}
          />
        </div>
      </div>
    </div>
  );
};
