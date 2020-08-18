import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { Header } from './Home/Common/Header';
import { Timeline } from './Home/Timeline';
import { Footer } from './Home/Common/Footer';
import Store from '../Store';
import { TweetApplicationService } from '../application/TweetApplicationService';
import Tweet from '../domain/models/Tweet/ConcreteClasses/Tweet';
import { HomeHeaderContent } from './Home/HomeHeaderContent';

export const HomeContainer: React.FC = () => {
  const store = Store.useStore();
  const isLogin = store.get('isLogin');

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
    store.set('isLogin')(false);
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
