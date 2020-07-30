import * as React from 'react';
import classes from './Timeline.module.css';
import { Retweet } from './Retweet';
import { Reply } from './Reply';
import { TweetComponent } from './TweetComponent';
import Tweet from '../../domain/models/Tweet/ConcreteClasses/Tweet';

type Props = {
  tweetArray: Tweet[];
};

export const Timeline: React.FC<Props> = (props) => {
  const { tweetArray } = props;

  // const userImage = 'UserImage';
  //
  // const userName = 'neko';
  // const screenName = 'I_am_neko';
  // const howLongAgoNumber = 10;
  // const howLongAgoLabel = '分前';
  // const howLongAgo = `${String(howLongAgoNumber)}${howLongAgoLabel}`;
  //
  // const replyNumber = 1;
  // const retweetNumber = 1;
  // const likeNumber = 1;
  // const content = 'hogehogethisistweeeeeeeeeeeeeeeeeeeeeeet';

  return (
    <div className={classes.Timeline}>
      {tweetArray.map((t) => (
        // todo component が properties を知ってるイマイチ
        <TweetComponent tweet={t} key={t.tweetId.tweetId} />
      ))}
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
      {/* <Retweet*/}
      {/*  userImage={userImage}*/}
      {/*  userName={userName}*/}
      {/*  screenName={screenName}*/}
      {/*  howLongAgo={howLongAgo}*/}
      {/*  replyNumber={replyNumber}*/}
      {/*  retweetNumber={retweetNumber}*/}
      {/*  likeNumber={likeNumber}*/}
      {/*  content={content}*/}
      {/*/ >*/}
      {/* <Reply*/}
      {/*  userImage={userImage}*/}
      {/*  userName={userName}*/}
      {/*  screenName={screenName}*/}
      {/*  howLongAgo={howLongAgo}*/}
      {/*  replyNumber={replyNumber}*/}
      {/*  retweetNumber={retweetNumber}*/}
      {/*  likeNumber={likeNumber}*/}
      {/*  content={content}*/}
      {/*  replyTo="きゅうしま"*/}
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
    </div>
  );
};
