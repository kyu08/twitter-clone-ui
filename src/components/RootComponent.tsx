import * as React from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import { HomeContainer } from './HomeContainer';
import { LoginContainer } from './LoginContainer';
import classes from './RootComponent.module.css';
import { SignUpContainer } from './SignUpContainer';
import { TweetCreateContainer } from './Timeline/TweetCreate/TweetCreateContainer';

type Props = {
  isLogin: boolean;
  setIsLogin(boolean: boolean): void;
  userId?: string;
};

export const RootComponent: React.FC<Props> = (props) => {
  const { isLogin, setIsLogin, userId } = props;

  return (
    <div className={classes.RootComponent}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/signup"
            render={() => <SignUpContainer isLogin={isLogin} />}
          />
          <Route
            exact
            path="/login"
            render={() => (
              <LoginContainer isLogin={isLogin} setIsLogin={setIsLogin} />
            )}
          />
          <Route
            exact
            path="/home"
            render={() => (
              <HomeContainer isLogin={isLogin} setIsLogin={setIsLogin} />
            )}
          />
          <Route
            exact
            path="/tweet"
            render={() => (
              <TweetCreateContainer
                isLogin={isLogin}
                userImageURL="https://lh3.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1=w288-h288-n-rw"
                userId={userId}
              />
            )}
          />
          {isLogin ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Switch>
      </BrowserRouter>
    </div>
  );
};
