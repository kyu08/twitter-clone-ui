import { TweetCreateProps } from '../domain/models/Tweet/ITweetRepository';
import { AbstractTweet } from '../domain/models/Tweet/AbstractTweet';
import { TempTweetDataModel } from '../infrastructure/TempTweetDataModel';
import { TweetDataModel } from '../infrastructure/TweetDataModel';
import { TweetFactory } from '../domain/models/Tweet/TweetFactory';
import { hostURL } from '../util/Util';

// TODO ここでしか使わないメソッドは class の外に出す(外からは使えなくする)
export class TweetApplicationService {
  readonly tweetFactory: TweetFactory;

  constructor() {
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
        this.tweetFactory.createTweet(tweetProps),
      )
      .map((tweet: AbstractTweet) =>
        this.tweetFactory.createTweetDataModel(tweet),
      )
      .reverse();
  }

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

  // TODO ここで DataModel -> Tweet への変換やるのは違くね...?
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
    const tweet = this.tweetFactory.createTweet(props);

    return tweet.howLongAgo();
  }
}
