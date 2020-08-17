import * as React from 'react';
import classes from './TweetCreateHeaderContent.module.css';
import { GoBackButton } from '../Common/GoBackButton';

type Props = {
  submitTweet(): void;
  canSubmitTweet: boolean;
};

export const TweetCreateHeaderContent: React.FC<Props> = (props) => {
  const { submitTweet, canSubmitTweet } = props;

  return (
    <div className={classes.Header}>
      <GoBackButton />
      <div className={classes.ButtonWrapper}>
        <button
          className={classes.tweetButton}
          onClick={() => submitTweet()}
          disabled={!canSubmitTweet}
        >
          ツイートする
        </button>
      </div>
    </div>
  );
};
