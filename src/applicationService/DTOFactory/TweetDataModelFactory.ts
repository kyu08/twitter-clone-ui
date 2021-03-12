import { AbstractTweet } from '../../domain/models/Tweet/AbstractTweet';
import { TweetDataModel } from '../DTO/TweetDataModel';

export class TweetDataModelFactory {
  createTweetDataModel(tweet: AbstractTweet): TweetDataModel {
    return new TweetDataModel(tweet);
  }
}
