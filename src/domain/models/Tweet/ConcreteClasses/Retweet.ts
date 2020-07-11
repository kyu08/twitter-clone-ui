import { AbstractTweet } from '../AbstractTweet';
import { AbstractTweetProps, IAbstractTweet } from '../IAbstractTweet';
import UserId from '../../User/UserId/UserId';

interface RetweetProps extends AbstractTweetProps {
  readonly userId: UserId;
  readonly retweetedAt: Date;
}

// memo Retweet に独自メソッドを実装する場合は interface RetweetMethods extends IAbstractTweet{ // methods } ってやる
type IRetweet = RetweetProps & IAbstractTweet;

export default class Retweet extends AbstractTweet implements IRetweet {
  readonly userId: UserId;

  readonly retweetedAt: Date;

  // eslint-disable-next-line no-useless-constructor
  constructor(props: RetweetProps) {
    super(props);
    const { userId, retweetedAt } = props;
    this.userId = userId;
    this.retweetedAt = retweetedAt;
  }

  like(userId: UserId): AbstractTweet {
    const likeSet = this.likeSet.like(userId);
    const props = { ...this, likeSet };

    return new Retweet(props);
  }

  cancelLike(userId: UserId): AbstractTweet {
    const likeSet = this.likeSet.cancelLike(userId);
    const props = { ...this, likeSet };

    return new Retweet(props);
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
