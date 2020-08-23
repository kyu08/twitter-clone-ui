import Tweet from '../domain/models/Tweet/ConcreteClasses/Tweet';
import {
  ITweetRepository,
  TweetCreateProps,
} from '../domain/models/Tweet/ITweetRepository';
import { InMemoryTweetRepository } from '../inMemory/InMemoryTweetRepository';
import { AbstractTweet } from '../domain/models/Tweet/AbstractTweet';
import { TempTweetData } from '../infrastructure/TempTweetDataModel';
import { TweetDataModel } from '../infrastructure/TweetDataModel';
import { TweetRepository } from '../infrastructure/TweetRepository';
import { TweetFactory } from '../domain/models/Tweet/TweetFactory';

export class TweetApplicationService {
  static readonly tweetRepository: ITweetRepository = new InMemoryTweetRepository();

  // todo tweetRepo を1つにまとめよう
  static readonly tweetRepositoryNew = new TweetRepository();

  static readonly tweetFactory = new TweetFactory();

  // インスタンス化して逆順にして返す
  static toTweetInstanceArray(jsonArray: TweetCreateProps[]): TweetDataModel[] {
    return jsonArray
      .map((tweetProps: TweetCreateProps) =>
        TweetApplicationService.tweetRepository.createTweet(tweetProps),
      )
      .map((tweet: AbstractTweet) =>
        TweetApplicationService.tweetFactory.createTweetDataModel(tweet),
      )
      .reverse();
  }

  static fetchTimeline(): Promise<Response> {
    return TweetApplicationService.tweetRepositoryNew.fetchTimeline();
  }

  static postTweet(tweetDataModel: TempTweetData): Promise<Response> {
    return TweetApplicationService.tweetRepositoryNew.postTweet(tweetDataModel);
  }

  static returnTweetId(tweet: Tweet): string {
    return tweet.getTweetId();
  }

  static howLongAgo(tweetDataModel: TweetDataModel): string {
    const {
      content,
      createdAt,
      likeCount,
      replyCount,
      retweetCount,
      screenName,
      tweetId,
      userImageURL,
      userName,
    } = tweetDataModel;
    const props = {
      content,
      createdAt: String(createdAt),
      likeCount,
      replyCount,
      retweetCount,
      screenName,
      tweetId,
      userImageURL,
      userName,
    };
    const tweet = TweetApplicationService.tweetRepository.createTweet(props);

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
