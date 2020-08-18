import * as React from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import { HomeContainer } from './HomeContainer';
import { LoginContainer } from './LoginContainer';
import classes from './RootComponent.module.css';
import { SignUpContainer } from './SignUpContainer';
import { TweetCreateContainer } from './Home/TweetCreateContainer';
import { ProfileContainer } from './ProfileContainer';

type Props = {
  isLogin: boolean;
};

// this is presentation component.
export const RootComponent: React.FC<Props> = (props) => {
  const { isLogin } = props;

  return (
    <div className={classes.RootComponent}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={SignUpContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/home" component={HomeContainer} />
          <Route
            exact
            path="/tweet"
            render={() => (
              <TweetCreateContainer userImageURL="https://lh3.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1=w288-h288-n-rw" />
            )}
          />
          <Route exact path="/profile" component={ProfileContainer} />
          {isLogin ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Switch>
      </BrowserRouter>
    </div>
  );
};
