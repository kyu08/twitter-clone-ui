import * as React from 'react';
import classes from './Tweet.module.css';
import { UserImageContainer } from './Tweet/UserImageContainer';
import { TweetInformationContainer } from './Tweet/TweetInformationContainer';
import { TweetContentContainer } from './Tweet/TweetContentContainer';
import Tweet from '../../domain/models/Tweet/ConcreteClasses/Tweet';
import { TweetApplicationService } from '../../application/TweetApplicationService';

type Props = {
  tweet: Tweet;
};

export const TweetComponent: React.FC<Props> = (props) => {
  const { tweet } = props;
  const {
    content,
    likeCount,
    replyCount,
    retweetCount,
    screenName,
    userImageURL,
    userName,
  } = tweet;

  const howLongAgo = TweetApplicationService.howLongAgo(tweet);

  return (
    <div className={classes.TweetContainer}>
      <div className={classes.Tweet}>
        <UserImageContainer userImageURL={userImageURL.userImageURL} />
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
