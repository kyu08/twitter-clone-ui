import { AbstractTweet } from '../AbstractTweet';
import UserId from '../../User/UserId/UserId';
import { AbstractTweetProps } from '../IAbstractTweet';

export default class Tweet extends AbstractTweet {
  // eslint-disable-next-line no-useless-constructor
  constructor(props: AbstractTweetProps) {
    super(props);
  }

  // todo delete method 実装する
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
