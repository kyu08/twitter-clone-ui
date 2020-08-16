import * as React from 'react';
import { Link } from 'react-router-dom';
// import classes from './HomeHeaderContent.module.css';

type Props = {
  logout?(): void;
};

export const HomeHeaderContent: React.FC<Props> = (props) => {
  const { logout } = props;

  return (
    <>
      <button>
        <Link to="/profile">profile</Link>
      </button>
      {logout ? <button onClick={() => logout()}>Logout</button> : null}
    </>
  );
};
