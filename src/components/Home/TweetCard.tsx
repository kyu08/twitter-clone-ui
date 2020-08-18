import * as React from 'react';
import classes from './TweetCard.module.css';
import { UserImageSection } from './Tweet/UserImageSection';
import { TweetInformationSection } from './Tweet/TweetInformationSection';
import { TweetContentSection } from './Tweet/TweetContentSection';
import Tweet from '../../domain/models/Tweet/ConcreteClasses/Tweet';
import { TweetApplicationService } from '../../application/TweetApplicationService';

type Props = {
  tweet: Tweet;
};

export const TweetCard: React.FC<Props> = (props) => {
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
  const imageSize = 49;

  return (
    <div className={classes.TweetContainer}>
      <div className={classes.Tweet}>
        {/* todo component が tweet の詳細を知ってるのは微妙 */}
        <UserImageSection
          userImageURL={userImageURL.userImageURL}
          imageSize={imageSize}
        />
        <div>
          <TweetInformationSection
            userName={userName.userName}
            screenName={screenName.screenName}
            howLongAgo={howLongAgo}
          />
          <TweetContentSection
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
