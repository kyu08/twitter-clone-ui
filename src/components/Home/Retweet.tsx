import * as React from 'react';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import { TweetCard } from './TweetCard';
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
};

export const Retweet: React.FC<Props> = (props) => {
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
