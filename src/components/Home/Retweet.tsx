import * as React from 'react';

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

export const Retweet: React.FC<Props> = ({
  content,
  howLongAgo,
  likeNumber,
  replyNumber,
  retweetNumber,
  screenName,
  userImage,
  userName,
}) => {
  const message = 'さんがリツイート';

  return (
    <>
      {/* <TweetMessage*/}
      {/*  userName={userName}*/}
      {/*  message={message}*/}
      {/*  icon={<RepeatOutlinedIcon fontSize="small" />}*/}
      {/*/ >*/}
      {/* <TweetComponent*/}
      {/*  userImage={userImage}*/}
      {/*  userName={userName}*/}
      {/*  screenName={screenName}*/}
      {/*  howLongAgo={howLongAgo}*/}
      {/*  replyNumber={replyNumber}*/}
      {/*  retweetNumber={retweetNumber}*/}
      {/*  likeNumber={likeNumber}*/}
      {/*  content={content}*/}
      {/*/ >*/}
      hogehoge
    </>
  );
};
