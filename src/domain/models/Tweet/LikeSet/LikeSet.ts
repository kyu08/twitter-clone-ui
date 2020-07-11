import * as _ from 'lodash';
import UserId from '../../User/UserId/UserId';
// eslint-disable-next-line import/no-cycle
import { ILikeSet } from './ILikeSet';
import { deleteFromSet } from '../../../../util/Util';

export default class LikeSet implements ILikeSet {
  readonly likeSet: Set<UserId>;

  // constructor の呼ばれ方のパターン
  // 1. 新しい Tweet 用の空の Map を作成する
  // 2. JSON文字列だったやつをインスタンスとして復元する
  // 3. 更新したものをかえす
  constructor(likeSetProp: Set<UserId> = new Set()) {
    this.likeSet =
      likeSetProp instanceof Set ? likeSetProp : new Set(likeSetProp);
  }

  like(userId: UserId): LikeSet {
    const copy = _.cloneDeep(this.getLikeSet());
    copy.add(userId);
    const newProps = copy.add(userId);

    return new LikeSet(newProps);
  }

  cancelLike(userId: UserId): LikeSet {
    if (!this.getLikeSet().has(userId)) return this;
    const copiedLikeSet = _.cloneDeep(this.getLikeSet());
    const updatedLikeSet = deleteFromSet(copiedLikeSet, userId);

    return new LikeSet(updatedLikeSet);
  }

  private getLikeSet(): Set<UserId> {
    return this.likeSet;
  }
}
