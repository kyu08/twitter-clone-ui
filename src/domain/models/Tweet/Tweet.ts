import { AbstractTweet } from './AbstractTweet';
import UserId from '../User/UserId';
import TweetId from './TweetId';
import RetweetMap from './RetweetMap';
import Content from './Content';
import LikeSet from './LikeSet';

interface Tweetprops {
  readonly tweetId: TweetId;
  readonly userId: UserId;
  readonly content: Content;
  readonly retweetMap: RetweetMap;
  readonly likeSet: LikeSet;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export default class Tweet extends AbstractTweet {
  // eslint-disable-next-line no-useless-constructor
  constructor(props: Tweetprops) {
    super(props);
  }

  like(): any {
    console.log(1);
  }

  cancelLike(): any {
    console.log(1);
  }

  retweet(): any {
    console.log(1);
  }

  cancelRetweet(): any {
    console.log(1);
  }

  returnUpdatedInstance(): any {
    console.log(1);
  }
}
