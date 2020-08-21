import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import { TweetCreateHeaderContent } from './TweetCreate/TweetCreateHeaderContent';
import { TempTweetApplicationService } from '../../application/TempTweetApplicationService';
import { TweetCreateForm } from './TweetCreate/TweetCreateForm';
import { MAX_TWEET_LENGTH } from '../../domain/models/Tweet/Content/Content';
import { TempTweetDataModel } from '../../infrastructure/TempTweetDataModel';
import { hostURL } from '../../util/Util';
import { Header } from './Common/Header';
import Store from '../../Store';

type Props = {
  userImageURL: string;
};

export const TweetCreateContainer: React.FC<Props> = (props) => {
  const { userImageURL } = props;
  const store = Store.useStore();
  const isLogin = store.get('isLogin');
  const userId = store.get('userId');

  const [content, setContent] = React.useState<string>('');
  const [tempTweetDataModel, setTempTweetDataModel]: [
    TempTweetDataModel | undefined,
    Dispatch<SetStateAction<TempTweetDataModel | undefined>>,
  ] = React.useState<TempTweetDataModel>();

  const [hasSubmit, setHasSubmit] = React.useState<boolean>(false);
  const [canSubmitTweet, setCanSubmitTweet] = React.useState<boolean>(false);

  const submitTweet = () => {
    if (!tempTweetDataModel) throw new Error('there is no temp tweet');
    const data = tempTweetDataModel.build();
    // todo これも ApplicationService 経由で！
    fetch(`${hostURL}/tweet`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((resJSON) => {
        console.log(resJSON);
        setHasSubmit(true);
      })
      .catch((e) => console.log(e));
  };

  const handleChangeContent = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    if (!userId) throw new Error('ログインしてるはずなのにuserIdがないよ...');
    const contentEntered = e.currentTarget.value;
    setContent(contentEntered);
    const tempTweetDataModelUpdated = TempTweetApplicationService.getTempTweetDataModel(
      tempTweetDataModel,
      userId,
      contentEntered,
    );

    setCanSubmitTweet(
      TempTweetApplicationService.canSubmitTweet(tempTweetDataModelUpdated),
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
      />
    </>
  );
};
