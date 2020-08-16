import * as React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

type Props = {
  logout?(): void;
};

export const Header: React.FC<Props> = (props) => {
  const { logout } = props;

  return (
    <div className={classes.Header}>
      {/* todo userImage にする */}
      <button>
        <Link to="/profile">profile</Link>
      </button>
      {logout ? <button onClick={() => logout()}>Logout</button> : null}
    </div>
  );
};
