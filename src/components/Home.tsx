import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { Header } from './Timeline/Common/Header';
import { Timeline } from './Timeline/Timeline';
import { Footer } from './Timeline/Common/Footer';
import Store from '../Store';
import { tweetArray } from '../inMemory/ExampleTweets';

type Props = {
  isLogin: boolean;
  setIsLogin(boolean: boolean): void;
};

// this is container component.
export const Home: React.FC<Props> = (props) => {
  const { isLogin, setIsLogin } = props;
  const store = Store.useStore();

  // なんでここなら window.location.href が動いたんだろう
  const logout = (): void => {
    store.set('screenName')(undefined);
    setIsLogin(false);
  };

  return (
    <>
      {!isLogin && <Redirect to="/" />}
      <Header logout={logout} />
      <Timeline tweetArray={tweetArray} />
      <Footer />
    </>
  );
};
