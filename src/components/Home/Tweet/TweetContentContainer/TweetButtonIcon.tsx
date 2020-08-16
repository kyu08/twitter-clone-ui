import * as React from 'react';
import classes from './TweetButtonIcon.module.css';
import { TODO } from '../../../../util/Util';

type TweetButtonContainerProps = {
  buttonIcon: TODO<'material UI SVG Icon'>;
};

export const TweetButtonIcon: React.FC<TweetButtonContainerProps> = (props) => {
  const { buttonIcon } = props;

  return <div className={classes.TweetButtonContainer}>{buttonIcon}</div>;
};
