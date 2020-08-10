import * as React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import classes from './TweetCreateHeader.module.css';

type Props = {
  goBack(): void;
  submitTweet(): void;
  canSubmitTweet: boolean;
};

export const TweetCreateHeader: React.FC<Props> = (props) => {
  const { submitTweet, goBack, canSubmitTweet } = props;

  return (
    <div className={classes.Header}>
      <div className={classes.Icon} onClick={() => goBack()}>
        <ArrowBackIcon />
      </div>
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
