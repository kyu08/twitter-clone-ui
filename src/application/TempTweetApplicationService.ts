import { TempTweetFactory } from '../domain/models/TempTweet/TempTweetFactory';
import { TempTweet } from '../domain/models/TempTweet/ConcreteClasses/TempTweet';

export class TempTweetApplicationService {
  static readonly tempTweetFactory = new TempTweetFactory();

  static createTempTweet(userId: string, contentString: string): TempTweet {
    return TempTweetApplicationService.tempTweetFactory.createTempTweet(
      userId,
      contentString,
    );
  }
}
