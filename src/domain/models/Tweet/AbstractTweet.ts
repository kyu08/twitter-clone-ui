import TweetId from './TweetId/TweetId';
import Content from './Content/Content';
import { AbstractTweetProps } from './IAbstractTweet';
import ScreenName from '../User/Profile/ScreenName';
import UserImageURL from '../User/Profile/UserImageURL';
import UserName from '../User/Profile/UserName';

export abstract class AbstractTweet {
  readonly tweetId: TweetId;

  readonly screenName: ScreenName;

  readonly content: Content;

  readonly replyCount: number;

  readonly retweetCount: number;

  readonly likeCount: number;

  readonly tweetedAt: Date;

  readonly userImageURL: UserImageURL;

  readonly userName: UserName;

  protected constructor(props: AbstractTweetProps) {
    const {
      tweetId,
      screenName,
      content,
      replyCount,
      retweetCount,
      likeCount,
      tweetedAt,
      userImageURL,
      userName,
    } = props;
    this.tweetId = tweetId;
    this.screenName = screenName;
    this.content = content;
    this.replyCount = replyCount;
    this.retweetCount = retweetCount;
    this.likeCount = likeCount;
    this.tweetedAt = tweetedAt;
    this.userImageURL = userImageURL;
    this.userName = userName;
  }

  getTweetId(): number {
    return this.tweetId.tweetId;
  }
}
