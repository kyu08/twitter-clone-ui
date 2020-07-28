import { AbstractTweet } from '../AbstractTweet';
import TweetId from '../TweetId/TweetId';
import UserId from '../../User/UserId/UserId';
import { AbstractTweetProps } from '../IAbstractTweet';

interface ReplyProps extends AbstractTweetProps {
  replyTo: TweetId;
}

export default class Reply extends AbstractTweet {
  readonly replyTo: TweetId;

  constructor(props: ReplyProps) {
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
