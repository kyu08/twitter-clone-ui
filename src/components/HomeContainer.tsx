import * as React from 'react';
import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Header } from './Home/Common/Header';
import { Timeline } from './Home/Timeline';
import { Footer } from './Home/Common/Footer';
import Store from '../Store';
import { TweetApplicationService } from '../application/TweetApplicationService';
import { HomeHeaderContent } from './Home/HomeHeaderContent';
import { TweetDataModel } from '../infrastructure/TweetDataModel';

export const HomeContainer: React.FC = () => {
  const store = Store.useStore();
  const isLogin = store.get('isLogin');
  const userDataModel = store.get('userDataModel');

  const [tweetDataModelArray, setTweetDataModelArray] = React.useState<
    TweetDataModel[]
  >([]);

  useEffect(() => {
    (async () => {
      const tweetInstanceArray = await TweetApplicationService.getTimeLine().catch(
        (e) => e,
      );
      setTweetDataModelArray(tweetInstanceArray);
    })();
  }, []);

  const logout = (): void => {
    store.set('userId')(undefined);
    store.set('isLogin')(false);
  };

  return (
    <>
      {!isLogin && <Redirect to="/" />}
      {(tweetDataModelArray === [] || !userDataModel) && <div>loading</div>}
      <Header logout={logout}>
        {userDataModel && (
          <HomeHeaderContent logout={logout} userDataModel={userDataModel} />
        )}
      </Header>
      <Timeline tweetDataModelArray={tweetDataModelArray} />
      <Footer />
    </>
  );
};
