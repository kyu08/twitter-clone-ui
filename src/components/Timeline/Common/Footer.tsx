import * as React from 'react';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';
import { TweetCreateLink } from './TweetCreateLink';

export const Footer: React.FC<{}> = () => {
  return (
    <div className={classes.Footer}>
      {/* <div>hogehoge</div>*/}
      <Link to="/tweet">
        <TweetCreateLink />
      </Link>
    </div>
  );
};
