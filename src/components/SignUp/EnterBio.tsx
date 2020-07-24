import * as React from 'react';
import { Message } from '../Login/Message';
import classes from './EnterBio.module.css';

type Props = {
  goToNextPage(e: React.MouseEvent<HTMLInputElement>): void;
  backToPreviousPage(e: React.MouseEvent<HTMLInputElement>): void;
};

export const EnterBio: React.FC<Props> = (props) => {
  const { backToPreviousPage, goToNextPage } = props;

  return (
    <div>
      <Message message="自己紹介を入力してください 3/3" />
      <div className={classes.ButtonContainer}>
        <textarea />
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
