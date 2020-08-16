import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { Header } from './Home/Common/Header';
import { Timeline } from './Home/Timeline';
import { Footer } from './Home/Common/Footer';
import Store from '../Store';
import { TweetApplicationService } from '../application/TweetApplicationService';
import Tweet from '../domain/models/Tweet/ConcreteClasses/Tweet';
import { HomeHeaderContent } from './Home/HomeHeaderContent';

type Props = {
  isLogin: boolean;
  setIsLogin(boolean: boolean): void;
};

export const HomeContainer: React.FC<Props> = (props) => {
  const { isLogin, setIsLogin } = props;
  const store = Store.useStore();
  const [tweetArray, setTweetArray] = React.useState<Tweet[]>([]);

  React.useEffect(() => {
    TweetApplicationService.fetchTimeline()
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        const tweetInstanceArray = TweetApplicationService.toTweetInstanceArray(
          json,
        );
        setTweetArray(tweetInstanceArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const logout = (): void => {
    store.set('userId')(undefined);
    setIsLogin(false);
  };

  return (
    <>
      {!isLogin && <Redirect to="/" />}
      {tweetArray === [] && <div>loading</div>}
      <Header logout={logout}>
        <HomeHeaderContent logout={logout} />
      </Header>
      <Timeline tweetArray={tweetArray} />
      <Footer />
    </>
  );
};
