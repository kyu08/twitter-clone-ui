import { TweetDataModel } from '../../../infrastructure/TweetDataModel';
import { AbstractTweet } from './AbstractTweet';

export class TweetFactory {
  createTweetDataModel(tweet: AbstractTweet): TweetDataModel {
    return new TweetDataModel(tweet);
  }
}
