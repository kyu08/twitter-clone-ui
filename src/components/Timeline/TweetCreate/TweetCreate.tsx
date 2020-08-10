import * as React from 'react';
import { UserImageContainer } from '../Tweet/UserImageContainer';
import classes from './TweetCreate.module.css';
import { TweetCreateHeader } from './TweetCreateHeader';
import { TempTweetApplicationService } from '../../../application/TempTweetApplicationService';

type Props = {
  isLogin: boolean;
  userImageURL: string;
  userId?: string;
};

export const TweetCreate: React.FC<Props> = (props) => {
  const { isLogin, userImageURL, userId } = props;

  // todo #122 お近くの container component に移動しよ
  const [content, setContent] = React.useState('');
  const [tempTweet, setTempTweet] = React.useState();

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
    setTempTweet(tempTweetUpdated);
    console.log(tempTweetUpdated);
    console.log(tempTweet);
  };

  return (
    <>
      {console.log(isLogin)}
      {/* {!isLogin && <Redirect to="/" />}*/}
      <TweetCreateHeader />
      <div className={classes.TweetCreate}>
        <UserImageContainer userImage={userImageURL} />
        <div className={classes.RightContainer}>
          <textarea
            className={classes.InputElement}
            wrap="soft"
            value={content}
            onChange={(e) => handleChangeContent(e)}
          />
        </div>
      </div>
    </>
  );
};
