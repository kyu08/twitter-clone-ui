import * as React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import { TweetCreateHeader } from './TweetCreateHeader';
import { TempTweetApplicationService } from '../../../application/TempTweetApplicationService';
import { TweetCreateForm } from './TweetCreateForm';
import { MAX_TWEET_LENGTH } from '../../../domain/models/Tweet/Content/Content';
import { TempTweet } from '../../../domain/models/TempTweet/ConcreteClasses/TempTweet';
import { TempTweetDataModel } from '../../../ProdutionInfrastructure/TempTweetDataModel';
import { hostURL } from '../../../util/Util';

type Props = {
  isLogin: boolean;
  userImageURL: string;
  userId?: string;
};

export const TweetCreateContainer: React.FC<Props> = (props) => {
  const { isLogin, userImageURL, userId } = props;
  const [content, setContent] = React.useState('');
  const [tempTweet, setTempTweet]: [
    TempTweet | undefined,
    Dispatch<SetStateAction<TempTweet | undefined>>,
  ] = React.useState();
  const [hasSubmit, setHasSubmit] = React.useState(false);
  const [canSubmitTweet, setCanSubmitTweet] = React.useState(false);

  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  const submitTweet = () => {
    console.log('tweet button pushed.');
    if (!tempTweet) throw new Error('there is no temp tweet');
    const tempTweetDataModel = new TempTweetDataModel(tempTweet);
    const data = tempTweetDataModel.build();
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
    const tempTweetUpdated = TempTweetApplicationService.createTempTweet(
      userId,
      contentEntered,
    );
    if (
      contentEntered.length !== 0 &&
      contentEntered.length <= MAX_TWEET_LENGTH
    ) {
      setCanSubmitTweet(true);
    } else {
      setCanSubmitTweet(false);
    }

    setTempTweet(tempTweetUpdated);
  };

  return (
    <>
      {/* {console.log(isLogin)}*/}
      {/* {!isLogin && <Redirect to="/" />}*/}
      {hasSubmit && <Redirect to="/home" />}
      <TweetCreateHeader
        goBack={goBack}
        submitTweet={submitTweet}
        canSubmitTweet={canSubmitTweet}
      />
      <TweetCreateForm
        userImageURL={userImageURL}
        content={content}
        handleChangeContent={handleChangeContent}
      />
    </>
  );
};
