import * as _ from 'lodash';
import { ILikeSet } from './ILikeMap';
import UserId from '../User/UserId/UserId';
import { deleteFromSet } from '../../../util/Util';
import TweetId from '../Tweet/TweetId/TweetId';

export default class LikeSet implements ILikeSet {
  readonly tweetId: TweetId;

  readonly likeSet: Set<UserId>;

  // constructor の呼ばれ方のパターン
  // 1. 新しい Tweet 用の空の Map を作成する
  // 2. JSON文字列だったやつをインスタンスとして復元する
  // 3. 更新したものをかえす
  constructor(tweetId: TweetId, likeSetProp: Set<UserId> = new Set()) {
    this.tweetId = tweetId;
    this.likeSet =
      likeSetProp instanceof Set ? likeSetProp : new Set(likeSetProp);
  }

  like(userId: UserId): LikeSet {
    const copy = _.cloneDeep(this.getLikeSet());
    copy.add(userId);
    const newProps = copy.add(userId);

    return new LikeSet(this.tweetId, newProps);
  }

  cancelLike(userId: UserId): LikeSet {
    if (!this.getLikeSet().has(userId)) return this;
    const copiedLikeSet = _.cloneDeep(this.getLikeSet());
    const updatedLikeSet = deleteFromSet(copiedLikeSet, userId);

    return new LikeSet(this.tweetId, updatedLikeSet);
  }

  private getLikeSet(): Set<UserId> {
    return this.likeSet;
  }
}
