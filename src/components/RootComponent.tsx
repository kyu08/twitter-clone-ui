import * as React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import classes from './RootComponent.module.css';

type Props = {
  isLogin: boolean;
};

export const RootComponent: React.FC<Props> = (props) => {
  const { isLogin } = props;

  return (
    <div className={classes.RootComponent}>
      <BrowserRouter>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        {isLogin ? <Redirect to="/home" /> : <Redirect to="/login" />}
      </BrowserRouter>
    </div>
  );
};
