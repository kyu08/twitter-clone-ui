import { AbstractTweet } from '../AbstractTweet';
import { AbstractTweetProps } from '../IAbstractTweet';
import UserId from '../../User/UserId/UserId';

// todo SingleTweet とかにする？
export default class Tweet extends AbstractTweet {
  // eslint-disable-next-line no-useless-constructor
  constructor(props: AbstractTweetProps) {
    super(props);
  }

  like(userId: UserId): AbstractTweet {
    const likeSet = this.likeSet.like(userId);
    const props = { ...this, likeSet };

    return new Tweet(props);
  }

  cancelLike(userId: UserId): AbstractTweet {
    const likeSet = this.likeSet.cancelLike(userId);
    const props = { ...this, likeSet };

    return new Tweet(props);
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
