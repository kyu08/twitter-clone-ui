import Tweet from '../domain/models/Tweet/ConcreteClasses/Tweet';
import {
  ITweetRepository,
  TweetCreateProps,
} from '../domain/models/Tweet/ITweetRepository';
import { InMemoryTweetRepository } from '../inMemory/InMemoryTweetRepository';
import { hostURL } from '../util/Util';
import { AbstractTweet } from '../domain/models/Tweet/AbstractTweet';
import { TempTweetData } from '../infrastructure/TempTweetDataModel';

export class TweetApplicationService {
  static readonly tweetRepository: ITweetRepository = new InMemoryTweetRepository();

  // インスタンス化して逆順にして返す
  static toTweetInstanceArray(jsonArray: TweetCreateProps[]): Tweet[] {
    return jsonArray
      .map((tweetProps: TweetCreateProps) =>
        TweetApplicationService.tweetRepository.createTweet(tweetProps),
      )
      .reverse();
  }

  static fetchTimeline(): Promise<Response> {
    return fetch(`${hostURL}/home/123`, {
      mode: 'cors',
    });
  }

  static postTweet(tweetDataModel: TempTweetData): Promise<Response> {
    return fetch(`${hostURL}/tweet`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tweetDataModel),
    });
  }

  static returnTweetId(tweet: Tweet): string {
    return tweet.getTweetId();
  }

  static howLongAgo(tweet: AbstractTweet): string {
    return tweet.howLongAgo();
  }

  static test() {
    console.log(1);
    // const tweetId = new TweetId(123);
    // const screenName = new ScreenName('123');
    // const content = new Content('this is content.');
    // const retweetMap = new RetweetMap();
    // const likeSet = new LikeSet();
    // const createdAt = new Date();
    // const updatedAt = new Date();
    // const replyTo = tweetId;
    // const props = {
    //   tweetId,
    //   screenName,
    //   content,
    //   retweetMap,
    //   likeSet,
    //   createdAt,
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
