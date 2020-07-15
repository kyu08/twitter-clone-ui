import UserId from '../User/UserId/UserId';
import { TODO } from '../../../util/Util';
import TweetId from './TweetId/TweetId';
import { IAbstractTweet } from './IAbstractTweet';
import Content from './Content/Content';
import RetweetMap from './RetweetMap/RetweetMap';
import LikeSet from './LikeSet/LikeSet';

export abstract class AbstractTweet {
  // export abstract class AbstractTweet implements IAbstractTweet {
  // protedted にできるやつはしよう
  protected readonly tweetId: TweetId;

  protected readonly userId: UserId;

  protected readonly content: Content;

  protected readonly retweetMap: RetweetMap;

  protected readonly likeSet: LikeSet;

  protected readonly tweetedAt: Date;

  // timeline の表示ロジックにもよるけどたぶんいらない気がする
  protected readonly updatedAt: Date;

  protected constructor(
    // todo AbstractTweet やな
    props: TODO<'TweetProps'> | TODO<'RetweetProps'> | TODO<'ReplyProps'>,
  ) {
    const {
      tweetId,
      userId,
      content,
      retweetMap,
      likeSet,
      tweetedAt,
      updatedAt,
    } = props;
    this.tweetId = tweetId;
    this.userId = userId;
    this.content = content;
    this.retweetMap = retweetMap;
    this.likeSet = likeSet;
    this.tweetedAt = tweetedAt;
    this.updatedAt = updatedAt;
  }

  // todo 実装したいメソッド
  // 抽象メソッド -> like / unlike , retweet / unRetweet メソッド
  // 各具象クラスのメソッド -> returnLikedTweet / returnUnlikedTweet

  abstract like(userId: UserId): AbstractTweet;

  abstract cancelLike(userId: UserId): AbstractTweet;

  abstract retweet(userId: UserId): AbstractTweet;

  abstract cancelRetweet(userId: UserId): AbstractTweet;
}
