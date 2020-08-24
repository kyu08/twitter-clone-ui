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
  replyTo: string;
};

export const Reply: React.FC<Props> = ({
  content,
  howLongAgo,
  likeNumber,
  replyNumber,
  retweetNumber,
  screenName,
  userImage,
  userName,
  replyTo,
}) => {
  const message = 'さんへの返信';

  return (
    <>
      {/* <TweetMessage userName={replyTo} message={message} />*/}
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
      hoge
    </>
  );
};
