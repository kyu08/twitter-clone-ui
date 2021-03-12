import { hostURL } from '../../util/Util';
import { TempTweet } from '../../domain/models/TempTweet/ConcreteClasses/TempTweet';
import { ITweetRepository } from '../../domain/repository/tweet/ITweetRepository';

export class TweetRepositoryImpl implements ITweetRepository {
  fetchTimeline(currentUserId: string): Promise<Response> {
    return fetch(`${hostURL}/home/${currentUserId}`, {
      mode: 'cors',
    });
  }

  postTweet(tempTweet: TempTweet): Promise<Response> {
    const tweetData = tempTweet.build();

    return fetch(`${hostURL}/tweet`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tweetData),
    });
  }
}
