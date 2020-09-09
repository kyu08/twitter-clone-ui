import { TweetCreateProps } from '../domain/models/Tweet/ITweetRepository';
import { AbstractTweet } from '../domain/models/Tweet/AbstractTweet';
import { TempTweetDataModel } from '../infrastructure/TempTweetDataModel';
import { TweetDataModel } from '../infrastructure/TweetDataModel';
import { TweetRepository } from '../infrastructure/TweetRepository';
import { TweetFactory } from '../domain/models/Tweet/TweetFactory';

export class TweetApplicationService {
  readonly tweetRepository: TweetRepository;

  readonly tweetFactory: TweetFactory;

  constructor() {
    this.tweetRepository = new TweetRepository();
    this.tweetFactory = new TweetFactory();
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
        this.tweetRepository.createTweet(tweetProps),
      )
      .map((tweet: AbstractTweet) =>
        this.tweetFactory.createTweetDataModel(tweet),
      )
      .reverse();
  }

  fetchTimeline(currentUserId: string): Promise<Response> {
    return this.tweetRepository.fetchTimeline(currentUserId);
  }

  postTweet(tweetDataModel: TempTweetDataModel): Promise<Response> {
    return this.tweetRepository.postTweet(tweetDataModel);
  }

  howLongAgo({
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
    const tweet = this.tweetRepository.createTweet(props);

    return tweet.howLongAgo();
  }
}
