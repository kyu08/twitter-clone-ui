import UserId from '../User/UserId';
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

  readonly createdAt: Date;

  readonly updatedAt: Date;

  protected constructor(
    props: TODO<'TweetProps'> | TODO<'RetweetProps'> | TODO<'ReplyProps'>,
  ) {
    const {
      retweetMap,
      content,
      createdAt,
      likeSet,
      tweetId,
      updatedAt,
      userId,
    } = props;
    this.tweetId = tweetId;
    this.userId = userId;
    this.content = content;
    this.retweetMap = retweetMap;
    this.likeSet = likeSet;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  // todo 実装したいメソッド
  // 抽象メソッド -> like / unlike , retweet / unRetweet メソッド
  // 各具象クラスのメソッド -> returnLikedTweet / returnUnlikedTweet

  // todo この : けすと error になるのなんで
  abstract like(): any;

  abstract cancelLike(): any;

  abstract retweet(): any;

  abstract cancelRetweet(): any;

  abstract returnUpdatedInstance(): any;
}
