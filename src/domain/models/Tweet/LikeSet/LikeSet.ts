import * as _ from 'lodash';
import UserId from '../../User/UserId/UserId';
import { ILikeSet } from './ILikeSet';

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
    const copy = _.cloneDeep(this.getLikeSet());

    // todo ↓これも
    const userIdFound = Array.from(copy.values()).find(
      (e) => e.userId === userId.userId,
    );
    if (userIdFound) copy.delete(userIdFound);

    // todo ↓これもあまり綺麗でない
    // for (const value of copy.values()) {
    //   if (value.userId === userId.userId) copy.delete(value);
    //   break;
    // }

    return new LikeSet(copy);
  }

  private getLikeSet(): Set<UserId> {
    return this.likeSet;
  }
}
