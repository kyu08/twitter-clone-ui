import UserId from '../User/UserId';

// 識別子 を先頭としてそれ以降はアルファベット順にしてみた。
interface IAbstractTweet {
  readonly tweetId: TweetId;
  readonly userId: UserId;
  readonly content: Content;
  readonly retweetMap: RetweetMap;
  readonly likeSet: LikeSet;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export abstract class AbstractTweet implements IAbstractTweet {
  readonly tweetId: TweetId;

  readonly userId: UserId;

  readonly content: Content;

  readonly retweetMap: RetweetMap;

  readonly likeSet: LikeSet;

  readonly createdAt: Date;

  readonly updatedAt: Date;

  protected constructor(props: IAbstractTweet) {
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
  abstract like(): {};

  abstract cancelLike(): {};

  abstract retweet(): {};

  abstract cancelRetweet(): {};

  abstract returnUpdatedInstance(): {};
}
