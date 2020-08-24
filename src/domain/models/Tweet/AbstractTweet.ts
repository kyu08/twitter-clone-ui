import format from 'date-fns/format';
import TweetId from './TweetId/TweetId';
import Content from './Content/Content';
import ScreenName from '../User/Profile/ScreenName';
import UserImageURL from '../User/Profile/UserImageURL';
import UserName from '../User/Profile/UserName';
import { ensurePropsContainsNoUndefined } from '../../../util/Util';

export interface AbstractTweetProps {
  tweetId: TweetId;
  screenName: ScreenName;
  content: Content;
  replyCount: number;
  retweetCount: number;
  likeCount: number;
  createdAt: Date;
  userImageURL: UserImageURL;
  userName: UserName;
}

// memo 以下の理由で abstract class で実装
// - sub class の constructor がシンプルにかける
// - abstract class な方が base class であることがわかりやすいし抽象から具象を作る方がしっくりくる
// けど abstract method ないなら ふつうに class で書くべき...?
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
    ensurePropsContainsNoUndefined<AbstractTweetProps>(props);
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

  howLongAgo(): string {
    const { createdAt } = this;
    const now = new Date();
    // diff[ms]: number
    const diffms = now.getTime() - createdAt.getTime();
    const diffSecond = Math.round(diffms / 1000);
    const diffMinute = Math.round(diffms / 1000 / 60);
    const diffHour = Math.round(diffms / 1000 / 60 / 60);
    const diffDay = Math.round(diffms / 1000 / 60 / 60 / 24);
    const fullDate: string = format(createdAt, 'yyyy/M/d');
    if (diffSecond < 60) return `${diffSecond}秒`;
    if (diffMinute < 60) return `${diffMinute}分`;
    if (diffHour < 24) return `${diffHour}時間`;
    if (diffDay < 7) return `${diffDay}日`;

    return fullDate;
  }
}
