import TweetId from './TweetId/TweetId';
import Content from './Content/Content';
import { AbstractTweetProps } from './IAbstractTweet';
import ScreenName from '../User/Profile/ScreenName';
import UserImageURL from '../User/Profile/UserImageURL';
import UserName from '../User/Profile/UserName';
import { ensurePropsContainsNoUndefined } from '../../../util/Util';

export abstract class AbstractTweet {
  readonly tweetId: TweetId;

  readonly screenName: ScreenName;

  readonly content: Content;

  readonly replyCount: number;

  readonly retweetCount: number;

  readonly likeCount: number;

  readonly createdAt: Date;

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
      createdAt,
      userImageURL,
      userName,
    } = props;
    ensurePropsContainsNoUndefined<AbstractTweetProps>(props);
    this.tweetId = tweetId;
    this.screenName = screenName;
    this.content = content;
    this.replyCount = replyCount;
    this.retweetCount = retweetCount;
    this.likeCount = likeCount;
    this.createdAt = createdAt;
    this.userImageURL = userImageURL;
    this.userName = userName;
  }

  getTweetId(): string {
    return this.tweetId.tweetId;
  }
}
