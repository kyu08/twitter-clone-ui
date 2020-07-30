import * as React from 'react';
import classes from './Tweet.module.css';
import { UserImageContainer } from './Tweet/UserImageContainer';
import { TweetInformationContainer } from './Tweet/TweetInformationContainer';
import { TweetContentContainer } from './Tweet/TweetContentContainer';
import Tweet from '../../domain/models/Tweet/ConcreteClasses/Tweet';

type Props = {
  tweet: Tweet;
};

export const TweetComponent: React.FC<Props> = (props) => {
  const { tweet } = props;
  const {
    content,
    tweetedAt,
    likeCount,
    // replyCount,
    retweetCount,
    screenName,
    userImage,
    userName,
  } = tweet;

  const replyCount = 1;
  // todo #111 ここちゃんと書く
  const howLongAgo = '2019/11/11';

  return (
    <div className={classes.TweetContainer}>
      <div className={classes.Tweet}>
        <UserImageContainer userImage={userImage.userImage} />
        <div className="TweetRightContainer">
          <TweetInformationContainer
            userName={userName.userName}
            screenName={screenName.screenName}
            howLongAgo={howLongAgo}
          />
          <TweetContentContainer
            replyCount={replyCount}
            retweetCount={retweetCount}
            likeCount={likeCount}
            content={content.content}
          />
        </div>
      </div>
    </div>
  );
};
