import { AbstractTweet } from '../AbstractTweet';
import TweetId from '../TweetId/TweetId';
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
}
