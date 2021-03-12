import * as React from 'react';
import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Header } from './Home/Common/Header';
import { Timeline } from './Home/Timeline';
import { Footer } from './Home/Common/Footer';
import Store from '../Store';
import { HomeHeaderContent } from './Home/HomeHeaderContent';
import { TweetApplicationService } from '../applicationService/TweetApplicationService';
import { TweetDataModel } from '../applicationService/DTO/TweetDataModel';

export const HomeContainer: React.FC = () => {
  const store = Store.useStore();
  const isLogin = store.get('isLogin');
  const userDataModel = store.get('userDataModel');
  const currentUserId = userDataModel?.userId;
  const tweetApplicationService = new TweetApplicationService();

  const [tweetDataModelArray, setTweetDataModelArray] = React.useState<
    TweetDataModel[]
  >([]);

  useEffect(() => {
    (async () => {
      if (!currentUserId) return;
      const tweetInstanceArray = await tweetApplicationService
        .getTimeLine(currentUserId)
        .catch((e) => e);
      setTweetDataModelArray(tweetInstanceArray);
    })();
  }, [currentUserId]);

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
