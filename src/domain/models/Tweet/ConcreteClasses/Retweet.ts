import { AbstractTweet } from '../AbstractTweet';
import { AbstractTweetProps, IAbstractTweet } from '../IAbstractTweet';
import UserId from '../../User/UserId/UserId';
import { TODO } from '../../../../util/Util';

interface RetweetProps {
  hogehoge: UserId;
  retweetedAt: Date;
}

// memo Retweet に独自メソッドを実装する場合は interface RetweetMethods extends IAbstractTweet{ // methods } ってやる
type IRetweet = RetweetProps & IAbstractTweet;

export default class Retweet extends AbstractTweet {
  private readonly hogehoge: UserId;

  private readonly retweetedAt: Date;

  // eslint-disable-next-line no-useless-constructor
  constructor(props: TODO<'AbstractTweetProps'> & RetweetProps) {
    super(props);
    const { hogehoge, retweetedAt } = props;
    this.hogehoge = hogehoge;
    this.retweetedAt = retweetedAt;
  }

  like(userId: UserId): Retweet {
    const likeSet = this.likeSet.like(userId);
    const props = { ...this, likeSet };

    return new Retweet(props);
  }

  cancelLike(userId: UserId): Retweet {
    const likeSet = this.likeSet.cancelLike(userId);
    const props = { ...this, likeSet };

    return new Retweet(props);
  }

  retweet(userId: UserId): Retweet {
    const retweetMap = this.retweetMap.retweet(userId);
    const props = { ...this, retweetMap };

    return new Retweet(props);
  }

  cancelRetweet(userId: UserId): Retweet {
    const retweetMap = this.retweetMap.cancelRetweet(userId);
    const props = { ...this, retweetMap };

    return new Retweet(props);
  }
}
