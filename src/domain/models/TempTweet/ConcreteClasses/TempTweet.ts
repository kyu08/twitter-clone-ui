import {
  AbstractTempTweet,
  AbstractTempTweetProps,
} from '../AbstractTempTweet';
import TempContent from '../TempContent';
import { MAX_TWEET_LENGTH } from '../../Tweet/Content/Content';

export class TempTweet extends AbstractTempTweet {
  // eslint-disable-next-line no-useless-constructor
  constructor(props: AbstractTempTweetProps) {
    super(props);
  }

  changeContent(contentString: string): TempTweet {
    const content = new TempContent(contentString);
    const props = { ...this, ...content };

    return new TempTweet(props);
  }

  canSubmit(): boolean {
    const { length: contentLength } = this.content.content;

    return contentLength !== 0 && contentLength <= MAX_TWEET_LENGTH;
  }
}
