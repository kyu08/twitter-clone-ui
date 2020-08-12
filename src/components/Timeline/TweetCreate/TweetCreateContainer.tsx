import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import { TweetCreateHeader } from './TweetCreateHeader';
import { TempTweetApplicationService } from '../../../application/TempTweetApplicationService';
import { TweetCreateForm } from './TweetCreateForm';
import { MAX_TWEET_LENGTH } from '../../../domain/models/Tweet/Content/Content';
import { TempTweet } from '../../../domain/models/TempTweet/ConcreteClasses/TempTweet';
import { hostURL } from '../../../util/Util';
import { TempTweetDataModel } from '../../../ProdutionInfrastructure/TempTweetDataModel';

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
    console.log('this is uuid');
    console.log(data.user_id);
    console.log(JSON.stringify(data));
    const datatest = {
      user_id: 'bad9996f-c846-4d86-9868-da57e19427f8',
      content: 'test',
    };
    fetch('http://localHost:3001/tweet', {
      // fetch(`${hostURL}/tweet`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        ContentType: 'application/json; charset=utf-8',
      },
      body: JSON.stringify(datatest),
    })
      .then((res) => {
        console.log('this is res');
        console.log(res);

        return res.json();
      })
      .then((resJSON) => console.log(resJSON))
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
      {console.log(isLogin)}
      {/* {!isLogin && <Redirect to="/" />}*/}
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
