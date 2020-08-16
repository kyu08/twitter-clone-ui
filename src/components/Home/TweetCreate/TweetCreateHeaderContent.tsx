import * as React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import classes from './TweetCreateHeaderContent.module.css';

type Props = {
  goBack(): void;
  submitTweet(): void;
  canSubmitTweet: boolean;
};

export const TweetCreateHeaderContent: React.FC<Props> = (props) => {
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
