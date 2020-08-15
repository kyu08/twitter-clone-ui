import { AbstractTweet } from '../AbstractTweet';
import { AbstractTweetProps, IAbstractTweet } from '../IAbstractTweet';
import UserId from '../../User/UserId/UserId';

interface RetweetProps extends AbstractTweetProps {
  retweetedBy: UserId;
  recreatedAt: Date;
}

// memo Retweet に独自メソッドを実装する場合は interface RetweetMethods extends IAbstractTweet{ // methods } ってやる
type IRetweet = RetweetProps & IAbstractTweet;

export default class Retweet extends AbstractTweet {
  readonly retweetedBy: UserId;

  readonly recreatedAt: Date;

  // eslint-disable-next-line no-useless-constructor
  constructor(props: RetweetProps) {
    super(props);
    const { retweetedBy, recreatedAt } = props;
    this.retweetedBy = retweetedBy;
    this.recreatedAt = recreatedAt;
  }
}
