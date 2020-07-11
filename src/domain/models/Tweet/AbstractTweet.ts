import UserId from '../User/UserId/UserId';
import { TODO } from '../../../util/Util';
import TweetId from './TweetId';
import { IAbstractTweet } from './IAbstractTweet';
import Content from './Content';
import RetweetMap from './RetweetMap';
import LikeSet from './LikeSet';

export abstract class AbstractTweet implements IAbstractTweet {
  readonly tweetId: TweetId;

  readonly userId: UserId;

  readonly content: Content;

  readonly retweetMap: RetweetMap;

  readonly likeSet: LikeSet;

  readonly tweetedAt: Date;

  // timeline の表示ロジックにもよるけどたぶんいらない気がする
  readonly updatedAt: Date;

  protected constructor(
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

  abstract retweet(): any;

  abstract cancelRetweet(): any;

  abstract returnUpdatedInstance(): any;
}
