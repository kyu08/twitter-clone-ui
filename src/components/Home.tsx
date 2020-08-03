import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { Header } from './Timeline/Common/Header';
import { Timeline } from './Timeline/Timeline';
import { Footer } from './Timeline/Common/Footer';
import Store from '../Store';
import { tweetArrayStatic } from '../inMemory/ExampleTweets';
import Tweet from '../domain/models/Tweet/ConcreteClasses/Tweet';

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
    // todo repository 経由で！
    fetch('http://localhost:3001/home/123', {
      mode: 'cors',
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        console.log(tweetArrayStatic);
        // todo tweetArray は Tweet[] を要求しているのでそこんとこあってない
        setTweetArray(tweetArrayStatic);
        // setTweetArray(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const logout = (): void => {
    store.set('screenName')(undefined);
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
