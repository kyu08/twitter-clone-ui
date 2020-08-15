import { AbstractTweet, AbstractTweetProps } from '../AbstractTweet';
import UserId from '../../User/UserId/UserId';

interface RetweetProps extends AbstractTweetProps {
  retweetedBy: UserId;
  recreatedAt: Date;
}

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
