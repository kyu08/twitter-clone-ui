import {
  AbstractTempTweet,
  AbstractTempTweetProps,
} from '../AbstractTempTweet';
import TweetId from '../../Tweet/TweetId/TweetId';
import TempContent from '../TempContent';

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

  changeContent(contentString: string): TempReply {
    const content = new TempContent(contentString);
    const props = { ...this, ...content };

    return new TempReply(props);
  }
}
