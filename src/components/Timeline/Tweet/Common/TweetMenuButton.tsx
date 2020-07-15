import * as React from 'react';
import classes from './TweetMenuButton.module.css';

interface TweetMenuButtonProp {
  buttonIcon: any;
}

export const TweetMenuButton: React.FC<TweetMenuButtonProp> = (props) => {
  const { buttonIcon } = props;

  return (
    <div
      className={classes.TweetMenuButton}
      // todo props から function 受け取って onClick で実行
      onClick={() => console.log(123)}
    >
      {buttonIcon}
    </div>
  );
};
