import { AbstractTweet } from '../AbstractTweet';
import { AbstractTweetProps, IAbstractTweet } from '../IAbstractTweet';
import TweetId from '../TweetId/TweetId';
import UserId from '../../User/UserId/UserId';

interface ReplyProps extends AbstractTweetProps {
  readonly replyTo: TweetId;
}

// memo Reply に独自メソッドを実装する場合は interface ReplyMethods extends IAbstractTweet{ // methods } ってやる
type IReply = ReplyProps & IAbstractTweet;

export default class Reply extends AbstractTweet implements IReply {
  readonly replyTo: TweetId;

  // eslint-disable-next-line no-useless-constructor
  constructor(props: ReplyProps) {
    super(props);
    const { replyTo } = props;
    this.replyTo = replyTo;
  }

  like(userId: UserId): AbstractTweet {
    const likeSet = this.likeSet.like(userId);
    const props = { ...this, likeSet };

    return new Reply(props);
  }

  cancelLike(userId: UserId): AbstractTweet {
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
