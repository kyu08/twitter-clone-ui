import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { TweetCreateHeader } from './TweetCreateHeader';
import { TempTweetApplicationService } from '../../../application/TempTweetApplicationService';
import { TweetCreateForm } from './TweetCreateForm';
import { MAX_TWEET_LENGTH } from '../../../domain/models/Tweet/Content/Content';

type Props = {
  isLogin: boolean;
  userImageURL: string;
  userId?: string;
};

export const TweetCreateContainer: React.FC<Props> = (props) => {
  const { isLogin, userImageURL, userId } = props;
  const [content, setContent] = React.useState('');
  const [tempTweet, setTempTweet] = React.useState();
  const [canSubmitTweet, setCanSubmitTweet] = React.useState(false);

  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  const submitTweet = () => {
    console.log(tempTweet);
    console.log('tweet button pushed.');
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
