import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { Header } from './Timeline/Common/Header';
import { Timeline } from './Timeline/Timeline';
import { Footer } from './Timeline/Common/Footer';
import Store from '../Store';
import { TweetApplicationService } from '../application/TweetApplicationService';
import { TweetCreateProps } from '../domain/models/Tweet/ITweetRepository';

type Props = {
  isLogin: boolean;
  setIsLogin(boolean: boolean): void;
};

export const HomeContainer: React.FC<Props> = (props) => {
  const { isLogin, setIsLogin } = props;
  const store = Store.useStore();
  const [tweetArray, setTweetArray] = React.useState([]);

  React.useEffect(() => {
    TweetApplicationService.fetchTimeline()
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        // todo これも関数化して分離する？
        const tweetInstanceArray = json.map((tweetProps: TweetCreateProps) =>
          TweetApplicationService.toInsntace(tweetProps),
        );
        // todo これがドメイン知識なのかどうなのか...
        const tweetInstanceArrayReversed = tweetInstanceArray.reverse();
        setTweetArray(tweetInstanceArrayReversed);
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
