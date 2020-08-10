import {
  AbstractTempTweet,
  AbstractTempTweetProps,
} from '../AbstractTempTweet';
import TempContent from '../TempContent';

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
}
