import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import { TweetCreateHeaderContent } from './TweetCreate/TweetCreateHeaderContent';
import { TempTweetApplicationService } from '../application/TempTweetApplicationService';
import { TweetCreateForm } from './TweetCreate/TweetCreateForm';
import { TempTweetDataModel } from '../infrastructure/TempTweetDataModel';
import { Header } from './Home/Common/Header';
import Store from '../Store';
import { TweetApplicationService } from '../application/TweetApplicationService';
import { DefaultUserImageURL } from '../util/Util';

export const TweetCreateContainer: React.FC = () => {
  const store = Store.useStore();
  const isLogin = store.get('isLogin');
  const userId = store.get('userId');
  const userDataModel = store.get('userDataModel');
  const userImageURL = userDataModel
    ? userDataModel.userImageURL
    : DefaultUserImageURL;
  const screenName = userDataModel ? userDataModel.screenName : '';
  const tempTweetApplicationService = new TempTweetApplicationService();
  const tweetApplicationService = new TweetApplicationService();

  const [content, setContent] = React.useState<string>('');
  const [tempTweetDataModel, setTempTweetDataModel]: [
    TempTweetDataModel | undefined,
    Dispatch<SetStateAction<TempTweetDataModel | undefined>>,
  ] = React.useState<TempTweetDataModel>();

  const [hasSubmit, setHasSubmit] = React.useState<boolean>(false);

  const [canSubmitTweet, setCanSubmitTweet] = React.useState<boolean>(false);

  const submitTweet = async () => {
    if (!tempTweetDataModel) throw new Error('there is no temp tweet');
    const response = await tweetApplicationService
      .postTweet(tempTweetDataModel)
      .catch((e) => console.log(e));
    // TODO response が error でなければ "tweet を送信しました"的な表示をだす？
    console.log(response);
    setHasSubmit(true);
  };

  const handleChangeContent = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    if (!userId) throw new Error('ログインしてるはずなのにuserIdがないよ...');
    const contentEntered = e.currentTarget.value;
    setContent(contentEntered);
    const tempTweetDataModelUpdated = tempTweetApplicationService.getTempTweetDataModel(
      userId,
      contentEntered,
      tempTweetDataModel,
    );

    setCanSubmitTweet(
      tempTweetApplicationService.canSubmitTweet(tempTweetDataModelUpdated),
    );
    setTempTweetDataModel(tempTweetDataModelUpdated);
  };

  return (
    <>
      {!isLogin && <Redirect to="/" />}
      {hasSubmit && <Redirect to="/home" />}
      <Header>
        <TweetCreateHeaderContent
          submitTweet={submitTweet}
          canSubmitTweet={canSubmitTweet}
        />
      </Header>
      <TweetCreateForm
        userImageURL={userImageURL}
        content={content}
        handleChangeContent={handleChangeContent}
        screenName={screenName}
      />
    </>
  );
};
