import * as React from 'react';
import { Tweet } from './Tweet';
import { TweetMessage } from './Tweet/Common/TweetMessage';

type Props = {
  userImage: string;
  userName: string;
  screenName: string;
  howLongAgo: string;
  replyNumber: number;
  retweetNumber: number;
  likeNumber: number;
  content: string;
  replyTo: string;
};

export const Reply: React.FC<Props> = (props) => {
  const {
    content,
    howLongAgo,
    likeNumber,
    replyNumber,
    retweetNumber,
    screenName,
    userImage,
    userName,
    replyTo,
  } = props;

  const message = 'さんへの返信';

  return (
    <>
      <TweetMessage userName={replyTo} message={message} />
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
    </>
  );
};
