import { AbstractTweet } from '../AbstractTweet';
import UserId from '../../User/UserId/UserId';
import { AbstractTweetProps } from '../IAbstractTweet';

// todo SingleTweet とかにする？
export default class Tweet extends AbstractTweet {
  // constructor(props: AbstractTweetProps) {
  // eslint-disable-next-line no-useless-constructor
  constructor(props: AbstractTweetProps | Partial<AbstractTweet>) {
    super(props);
  }

  like(userId: UserId): Tweet {
    const likeSet = this.likeSet.like(userId);
    const props = { ...this, likeSet };

    return new Tweet(props);
  }

  cancelLike(userId: UserId): Tweet {
    const likeSet = this.likeSet.cancelLike(userId);
    const props = { ...this, likeSet };

    return new Tweet(props);
  }

  retweet(userId: UserId): Tweet {
    const retweetMap = this.retweetMap.retweet(userId);
    const props = { ...this, retweetMap };

    return new Tweet(props);
  }

  cancelRetweet(userId: UserId): Tweet {
    const retweetMap = this.retweetMap.cancelRetweet(userId);
    const props = { ...this, retweetMap };

    return new Tweet(props);
  }
}
