import { hostURL } from '../../util/Util';
import { TempTweetDataModel } from '../../applicationService/DTO/TempTweetDataModel';

export class TweetRepository {
  fetchTimeline(currentUserId: string): Promise<Response> {
    return fetch(`${hostURL}/home/${currentUserId}`, {
      mode: 'cors',
    });
  }

  postTweet(tweetDataModel: TempTweetDataModel): Promise<Response> {
    const tweetData = tweetDataModel.build();

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
