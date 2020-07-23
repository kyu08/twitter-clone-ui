import * as React from 'react';
import classes from './TweetMenuButton.module.css';

type TweetMenuButtonProp = {
  // todo 型書こう
  buttonIcon: any;
};

export const TweetMenuButton: React.FC<TweetMenuButtonProp> = (props) => {
  const { buttonIcon } = props;

  return (
    <div className={classes.TweetMenuButton} onClick={() => console.log(123)}>
      {buttonIcon}
    </div>
  );
};
