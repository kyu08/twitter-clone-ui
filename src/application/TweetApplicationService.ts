import { TweetCreateProps } from '../domain/models/Tweet/ITweetRepository';
import { AbstractTweet } from '../domain/models/Tweet/AbstractTweet';
import { TempTweetData } from '../infrastructure/TempTweetDataModel';
import { TweetDataModel } from '../infrastructure/TweetDataModel';
import { TweetRepository } from '../infrastructure/TweetRepository';
import { TweetFactory } from '../domain/models/Tweet/TweetFactory';

export class TweetApplicationService {
  static readonly tweetRepository = new TweetRepository();

  static readonly tweetFactory = new TweetFactory();

  static async getTimeLine(): Promise<TweetDataModel[]> {
    const response = await TweetApplicationService.fetchTimeline().catch(
      (e) => e,
    );
    const resJson = await response.json();

    return TweetApplicationService.toTweetInstanceArray(resJson);
  }

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
    return TweetApplicationService.tweetRepository.fetchTimeline();
  }

  static postTweet(tweetDataModel: TempTweetData): Promise<Response> {
    return TweetApplicationService.tweetRepository.postTweet(tweetDataModel);
  }

  static howLongAgo({
    content,
    createdAt,
    likeCount,
    replyCount,
    retweetCount,
    screenName,
    tweetId,
    userImageURL,
    userName,
  }: TweetDataModel): string {
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
}
