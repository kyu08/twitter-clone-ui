import * as React from 'react';
import classes from './Tweet.module.css';
import { UserImageContainer } from './Tweet/UserImageContainer';
import { TweetInformationContainer } from './Tweet/TweetInformationContainer';
import { TweetContentContainer } from './Tweet/TweetContentContainer';

type Props = {
  userImage: string;
  userName: string;
  screenName: string;
  howLongAgo: string;
  replyNumber: number;
  retweetNumber: number;
  likeNumber: number;
  content: string;
};

export const Tweet: React.FC<Props> = (props) => {
  const {
    content,
    howLongAgo,
    likeNumber,
    replyNumber,
    retweetNumber,
    screenName,
    userImage,
    userName,
  } = props;

  return (
    <div className={classes.TweetContainer}>
      <div className={classes.Tweet}>
        <UserImageContainer userImage={userImage} />
        <div className="TweetRightContainer">
          <TweetInformationContainer
            userName={userName}
            screenName={screenName}
            howLongAgo={howLongAgo}
          />
          <TweetContentContainer
            replyNumber={replyNumber}
            retweetNumber={retweetNumber}
            likeNumber={likeNumber}
            content={content}
          />
        </div>
      </div>
    </div>
  );
};
