import { AbstractTweet } from './AbstractTweet';
import { AbstractTweetProps } from './IAbstractTweet';

export default class Tweet extends AbstractTweet {
  // eslint-disable-next-line no-useless-constructor
  constructor(props: AbstractTweetProps) {
    super(props);
  }

  like(): any {
    console.log(1);
  }

  cancelLike(): any {
    console.log(1);
  }

  retweet(): any {
    console.log(1);
  }

  cancelRetweet(): any {
    console.log(1);
  }

  returnUpdatedInstance(): any {
    console.log(1);
  }
}
