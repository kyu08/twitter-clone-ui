import * as React from 'react';
import { Message } from '../Login/Message';
import classes from './EnterUserImage.module.css';

type Props = {
  goToNextPage(e: React.MouseEvent<HTMLInputElement>): void;
  backToPreviousPage(e: React.MouseEvent<HTMLInputElement>): void;
};

export const EnterUserImage: React.FC<Props> = (props) => {
  const { backToPreviousPage, goToNextPage } = props;

  return (
    <div>
      <Message message="プロフォール画像を選ぶ 2/3" />
      <div className={classes.ButtonContainer}>
        <input type="file" />
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
