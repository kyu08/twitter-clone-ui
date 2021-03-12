import { AbstractTweet } from '../domain/models/Tweet/AbstractTweet';
import {
  TweetCreateProps,
  TweetFactory,
} from '../domain/factory/tweet/TweetFactory';
import { TweetDataModel } from './DTO/TweetDataModel';
import { TempTweetDataModel } from './DTO/TempTweetDataModel';
import { TempTweetFactory } from '../domain/factory/tempTweet/TempTweetFactory';
import { TweetRepository } from '../infrastructure/repository/TweetRepositoryImpl';

// TODO やる
// TODO ここでしか使わないメソッドは private にする
export class TweetApplicationService {
  readonly tweetRepository: TweetRepository;

  readonly tweetFactory: TweetFactory;

  readonly tempTweetFactory: TempTweetFactory;

  constructor() {
    this.tweetRepository = new TweetRepository();
    this.tweetFactory = new TweetFactory();
    this.tempTweetFactory = new TempTweetFactory();
  }

  async getTimeLine(currentUserId: string): Promise<TweetDataModel[]> {
    const response = await this.fetchTimeline(currentUserId).catch((e) => e);
    const resJson = await response.json();

    return this.toTweetInstanceArray(resJson);
  }

  // インスタンス化して逆順にして返す
  toTweetInstanceArray(jsonArray: TweetCreateProps[]): TweetDataModel[] {
    return jsonArray
      .map((tweetProps: TweetCreateProps) =>
        this.tweetFactory.createTweet(tweetProps),
      )
      .map((tweet: AbstractTweet) =>
        this.tweetFactory.createTweetDataModel(tweet),
      )
      .reverse();
  }

  fetchTimeline(currentUserId: string): Promise<Response> {
    return this.tweetRepository.fetchTimeline(currentUserId);
  }

  postTweet(tempTweetDataModel: TempTweetDataModel): Promise<Response> {
    const tempTweet = this.tempTweetFactory.createFromDataModel(
      tempTweetDataModel,
    );

    return this.tweetRepository.postTweet(tempTweet);
  }

  howLongAgo(tweetDataModel: TweetDataModel): string {
    const tweet = this.tweetFactory.createTweet(tweetDataModel);

    return tweet.howLongAgo();
  }
}
