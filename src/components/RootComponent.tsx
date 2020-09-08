import * as React from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { HomeContainer } from './HomeContainer';
import { LoginContainer } from './LoginContainer';
import { SignUpContainer } from './SignUpContainer';
import { TweetCreateContainer } from './Home/TweetCreateContainer';
import { ProfileContainer } from './ProfileContainer';
import { FollowingListContainer } from './FollowingListContainer';

type Props = {
  isLogin: boolean;
};

const RootComponentWrapper = styled.div`
  background-color: #15202b;
  color: white;
  overflow: hidden;
  max-width: 375px;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
`;

// this is presentation component.
export const RootComponent: React.FC<Props> = ({ isLogin }) => {
  return (
    <RootComponentWrapper>
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={SignUpContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/home" component={HomeContainer} />
          <Route exact path="/tweet" component={TweetCreateContainer} />
          <Route exact path="/:screenName" component={ProfileContainer} />
          <Route
            exact
            path="/:screenName/following"
            component={FollowingListContainer}
          />
          {isLogin ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Switch>
      </BrowserRouter>
    </RootComponentWrapper>
  );
};
