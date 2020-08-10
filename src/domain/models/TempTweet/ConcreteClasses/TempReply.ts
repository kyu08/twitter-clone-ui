import {
  AbstractTempTweet,
  AbstractTempTweetProps,
} from '../AbstractTempTweet';
import TweetId from '../../Tweet/TweetId/TweetId';

interface TempReplyProps extends AbstractTempTweetProps {
  replyTo: TweetId;
}

export class TempReply extends AbstractTempTweet {
  readonly replyTo: TweetId;

  constructor(props: TempReplyProps) {
    super(props);
    const { replyTo } = props;
    this.replyTo = replyTo;
  }
}
