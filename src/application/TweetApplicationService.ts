import Tweet from '../domain/models/Tweet/ConcreteClasses/Tweet';
import {
  ITweetRepository,
  TweetCreateProps,
} from '../domain/models/Tweet/ITweetRepository';
import { InMemoryTweetRepository } from '../inMemory/InMemoryTweetRepository';

export class TweetApplicationService {
  static readonly tweetRepository: ITweetRepository = new InMemoryTweetRepository();

  static toInsntace(json: TweetCreateProps): Tweet {
    return TweetApplicationService.tweetRepository.createTweet(json);
  }

  static fetchTimeline(): Promise<Response> {
    const hostURL = 'http://localhost:3001';

    return fetch(`${hostURL}/home/123`, {
      mode: 'cors',
    });
  }

  static returnTweetId(tweet: Tweet): number {
    return tweet.getTweetId();
  }


  static test() {
    console.log(1);
    // const tweetId = new TweetId(123);
    // const screenName = new ScreenName('123');
    // const content = new Content('this is content.');
    // const retweetMap = new RetweetMap();
    // const likeSet = new LikeSet();
    // const tweetedAt = new Date();
    // const updatedAt = new Date();
    // const replyTo = tweetId;
    // const props = {
    //   tweetId,
    //   screenName,
    //   content,
    //   retweetMap,
    //   likeSet,
    //   tweetedAt,
    //   updatedAt,
    //   replyTo,
    // };
    // const tweet = new Reply(props);
    // const userA = new UserId(1234);
    // // const userB = new UserId(12344);
    // const tweetB = tweet.like(userA);
    // const tweetC = tweetB.cancelLike(userA);
    // console.log(tweetB);
    // // const tweetC = tweetB.cancelLike(userA);
    // console.log(tweetC);
  }
}
