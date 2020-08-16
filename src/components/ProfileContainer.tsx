import * as React from 'react';
import { Redirect } from 'react-router-dom';

type Props = {
  isLogin: boolean;
};

export const ProfileContainer: React.FC<Props> = (props) => {
  const { isLogin } = props;

  return (
    <>
      {!isLogin && <Redirect to="/" />}
      this is ProfileContainer
    </>
  );
};
