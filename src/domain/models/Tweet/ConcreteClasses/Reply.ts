import { AbstractTweet } from '../AbstractTweet';
import TweetId from '../TweetId/TweetId';
import UserId from '../../User/UserId/UserId';
import { AbstractTweetProps } from '../IAbstractTweet';
import Content from '../Content/Content';
import RetweetMap from '../RetweetMap/RetweetMap';
import LikeSet from '../LikeSet/LikeSet';

interface ReplyProps {
  tweetId: TweetId;
  userId: UserId;
  content: Content;
  retweetMap: RetweetMap;
  likeSet: LikeSet;
  tweetedAt: Date;
  updatedAt: Date;
  replyTo: TweetId;
}

export default class Reply extends AbstractTweet {
  private readonly replyTo: TweetId;

  constructor(props: ReplyProps | Partial<Reply>) {
    // constructor(props: ReplyProps | Partial<Reply>) {
    super(props);
    const { replyTo } = props;
    this.replyTo = replyTo;
  }

  like(userId: UserId): Reply {
    const likeSet = this.likeSet.like(userId);
    const props = { ...this, likeSet };

    return new Reply(props);
  }

  cancelLike(userId: UserId): Reply {
    const likeSet = this.likeSet.cancelLike(userId);
    const props = { ...this, likeSet };

    return new Reply(props);
  }

  retweet(userId: UserId): Reply {
    const retweetMap = this.retweetMap.retweet(userId);
    const props = { ...this, retweetMap };

    return new Reply(props);
  }

  cancelRetweet(userId: UserId): Reply {
    const retweetMap = this.retweetMap.cancelRetweet(userId);
    const props = { ...this, retweetMap };

    return new Reply(props);
  }
}
