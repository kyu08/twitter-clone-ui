import * as React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import classes from './TweetCreateLink.module.css';

export const TweetCreateLink: React.FC<{}> = () => {
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
