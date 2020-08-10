import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { Header } from './Timeline/Common/Header';
import { Timeline } from './Timeline/Timeline';
import { Footer } from './Timeline/Common/Footer';
import Store from '../Store';
import Tweet from '../domain/models/Tweet/ConcreteClasses/Tweet';
import { TweetApplicationService } from '../application/TweetApplicationService';
import { TweetCreateProps } from '../domain/models/Tweet/ITweetRepository';

type Props = {
  isLogin: boolean;
  setIsLogin(boolean: boolean): void;
};

// this is container component.
export const Home: React.FC<Props> = (props) => {
  const { isLogin, setIsLogin } = props;
  const store = Store.useStore();
  const [tweetArray, setTweetArray]: [Tweet[], any] = React.useState([]);

  React.useEffect(() => {
    TweetApplicationService.fetchTimeline()
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        // todo これも関数化して分離する？
        const TweetInstanceArray = json.map((t: TweetCreateProps) =>
          TweetApplicationService.toInsntace(t),
        );
        setTweetArray(TweetInstanceArray);
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
      <Header logout={logout} />
      <Timeline tweetArray={tweetArray} />
      <Footer />
    </>
  );
};
