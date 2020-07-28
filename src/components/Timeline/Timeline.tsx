import * as React from 'react';
import classes from './Timeline.module.css';
import { Tweet } from './Tweet';
import { Retweet } from './Retweet';
import { Reply } from './Reply';

export const Timeline: React.FC<{}> = () => {
  const userImage = 'UserImage';

  const userName = 'neko';
  const screenName = 'I_am_neko';
  const howLongAgoNumber = 10;
  const howLongAgoLabel = '分前';
  const howLongAgo = `${String(howLongAgoNumber)}${howLongAgoLabel}`;

  const replyNumber = 1;
  const retweetNumber = 1;
  const likeNumber = 1;
  const content = 'hogehogethisistweeeeeeeeeeeeeeeeeeeeeeet';

  return (
    <div className={classes.Timeline}>
      <Tweet
        userImage={userImage}
        userName={userName}
        screenName={screenName}
        howLongAgo={howLongAgo}
        replyNumber={replyNumber}
        retweetNumber={retweetNumber}
        likeNumber={likeNumber}
        content={content}
      />
      <Retweet
        userImage={userImage}
        userName={userName}
        screenName={screenName}
        howLongAgo={howLongAgo}
        replyNumber={replyNumber}
        retweetNumber={retweetNumber}
        likeNumber={likeNumber}
        content={content}
      />
      <Reply
        userImage={userImage}
        userName={userName}
        screenName={screenName}
        howLongAgo={howLongAgo}
        replyNumber={replyNumber}
        retweetNumber={retweetNumber}
        likeNumber={likeNumber}
        content={content}
        replyTo="きゅうしま"
      />
      <Tweet
        userImage={userImage}
        userName={userName}
        screenName={screenName}
        howLongAgo={howLongAgo}
        replyNumber={replyNumber}
        retweetNumber={retweetNumber}
        likeNumber={likeNumber}
        content={content}
      />
      <Tweet
        userImage={userImage}
        userName={userName}
        screenName={screenName}
        howLongAgo={howLongAgo}
        replyNumber={replyNumber}
        retweetNumber={retweetNumber}
        likeNumber={likeNumber}
        content={content}
      />
    </div>
  );
};
