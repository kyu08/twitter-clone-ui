import * as React from 'react';
import classes from './TweetCard.module.css';
import { UserImageSection } from './Tweet/UserImageSection';
import { TweetInformationSection } from './Tweet/TweetInformationSection';
import { TweetContentSection } from './Tweet/TweetContentSection';
import { TweetDataModel } from '../../infrastructure/TweetDataModel';
import { TweetApplicationService } from '../../application/TweetApplicationService';

type Props = {
  tweetDataModel: TweetDataModel;
};

export const TweetCard: React.FC<Props> = (props) => {
  const { tweetDataModel } = props;
  const {
    content,
    likeCount,
    replyCount,
    retweetCount,
    screenName,
    userImageURL,
    userName,
  } = tweetDataModel;

  // const howLongAgo = 'hoge';
  const howLongAgo = TweetApplicationService.howLongAgo(tweetDataModel);
  const imageSize = 49;

  return (
    <div className={classes.TweetContainer}>
      <div className={classes.Tweet}>
        <UserImageSection userImageURL={userImageURL} imageSize={imageSize} />
        <div>
          <TweetInformationSection
            userName={userName}
            screenName={screenName}
            howLongAgo={howLongAgo}
          />
          <TweetContentSection
            replyCount={replyCount}
            retweetCount={retweetCount}
            likeCount={likeCount}
            content={content}
          />
        </div>
      </div>
    </div>
  );
};
