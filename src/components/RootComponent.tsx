import * as React from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import classes from './RootComponent.module.css';
import { SignUp } from './SignUp';

type Props = {
  isLogin: boolean;
  setIsLogin(boolean: boolean): void;
};

export const RootComponent: React.FC<Props> = (props) => {
  const { isLogin, setIsLogin } = props;

  return (
    <div className={classes.RootComponent}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/signup"
            render={() => <SignUp isLogin={isLogin} />}
          />
          <Route
            exact
            path="/login"
            render={() => <Login isLogin={isLogin} setIsLogin={setIsLogin} />}
          />
          <Route
            exact
            path="/home"
            render={() => <Home isLogin={isLogin} setIsLogin={setIsLogin} />}
          />
          {isLogin ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Switch>
      </BrowserRouter>
    </div>
  );
};
