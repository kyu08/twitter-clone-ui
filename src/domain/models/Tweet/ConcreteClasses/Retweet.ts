import { AbstractTweet } from '../AbstractTweet';
import { AbstractTweetProps, IAbstractTweet } from '../IAbstractTweet';
import UserId from '../../User/UserId/UserId';

interface RetweetProps extends AbstractTweetProps {
  retweetedBy: UserId;
  retweetedAt: Date;
}

// memo Retweet に独自メソッドを実装する場合は interface RetweetMethods extends IAbstractTweet{ // methods } ってやる
type IRetweet = RetweetProps & IAbstractTweet;

export default class Retweet extends AbstractTweet {
  readonly retweetedBy: UserId;

  readonly retweetedAt: Date;

  // eslint-disable-next-line no-useless-constructor
  constructor(props: RetweetProps) {
    super(props);
    const { retweetedBy, retweetedAt } = props;
    this.retweetedBy = retweetedBy;
    this.retweetedAt = retweetedAt;
  }
}
