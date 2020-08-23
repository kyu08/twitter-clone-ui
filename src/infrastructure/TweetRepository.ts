import { hostURL } from '../util/Util';
import { TempTweetData } from './TempTweetDataModel';

export class TweetRepository {
  fetchTimeline(): Promise<Response> {
    return fetch(`${hostURL}/home/123`, {
      mode: 'cors',
    });
  }

  postTweet(tweetDataModel: TempTweetData): Promise<Response> {
    return fetch(`${hostURL}/tweet`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tweetDataModel),
    });
  }
}
