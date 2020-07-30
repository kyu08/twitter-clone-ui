import { AbstractTweet } from '../AbstractTweet';
import { AbstractTweetProps } from '../IAbstractTweet';

export default class Tweet extends AbstractTweet {
  // eslint-disable-next-line no-useless-constructor
  constructor(props: AbstractTweetProps) {
    super(props);
  }
}
