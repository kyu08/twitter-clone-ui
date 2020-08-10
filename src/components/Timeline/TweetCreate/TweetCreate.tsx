import * as React from 'react';
import { UserImageContainer } from './Tweet/UserImageContainer';
import classes from './TweetCreate.module.css';
import { TweetCreateHeader } from './TweetCreateHeader';

type Props = {
  isLogin: boolean;
  userImageURL: string;
  userId?: string;
};

export const TweetCreate: React.FC<Props> = (props) => {
  const { isLogin, userImageURL } = props;

  // todo #122 お近くの container component に移動しよ
  const [content, setContent] = React.useState('');

  const handleChangeContent = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setContent(e.currentTarget.value);
    console.log(e.currentTarget.value);
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
