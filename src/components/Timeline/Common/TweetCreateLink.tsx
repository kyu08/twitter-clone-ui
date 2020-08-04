import * as React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import classes from './TweetCreateLink.module.css';

type Props = {
  //
};

export const TweetCreateLink: React.FC<Props> = (props) => {
  const data = props;

  return (
    <>
      <div className={classes.TweetCreateLinkWrapper}>
        <button className={classes.TweetCreateLink}>
          <CreateIcon fontSize="default" />
        </button>
      </div>
    </>
  );
};
