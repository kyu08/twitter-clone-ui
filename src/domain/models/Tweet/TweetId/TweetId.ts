import { ensurePropsContainsNoUndefined } from '../../../../util/Util';

export default class TweetId {
  readonly tweetId: string;

  // todo string になおす
  constructor(tweetId: string) {
    ensurePropsContainsNoUndefined<string>(tweetId);
    this.tweetId = tweetId;
  }
}
