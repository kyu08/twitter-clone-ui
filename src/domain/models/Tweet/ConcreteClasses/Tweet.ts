import { AbstractTweet, AbstractTweetProps } from '../AbstractTweet';

export default class Tweet extends AbstractTweet {
  // eslint-disable-next-line no-useless-constructor
  constructor(props: AbstractTweetProps) {
    super(props);
  }
}
