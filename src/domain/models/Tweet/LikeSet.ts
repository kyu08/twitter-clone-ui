import * as _ from 'lodash';
import UserId from '../User/UserId';
import { TODO } from '../../../util/Util';

interface ILikeSet {
  // todo ここ Date だと不十分？ 値オブジェクト作った方がいい？
  readonly likeSet: Set<UserId>;
  like(userId: UserId): LikeSet;
  cancelLike(userId: UserId): LikeSet;
}

export default class LikeSet implements ILikeSet {
  readonly likeSet: Set<UserId>;

  // 1. 新しい Tweet 用の空の Map を作成する
  // 2. JSON文字列だったやつをインスタンスとして復元する
  // 3. 更新したものをかえす
  constructor(
    // note! ここの = [] 自信ない
    likeSetProp: Set<UserId> | TODO<'setProps(JSON.parseしたやつ)'> = [],
  ) {
    if (likeSetProp instanceof Set) {
      this.likeSet = likeSetProp;
    } else {
      this.likeSet = new Set(likeSetProp);
    }
  }

  like(userId: UserId): LikeSet {
    const copy = _.cloneDeep(this.getLikeSet());
    const newProps = copy.add(userId);

    return new LikeSet(newProps);
  }

  cancelLike(userId: UserId): LikeSet {
    // todo 判定本当に必要なのか検討
    if (!this.getLikeSet().has(userId)) return this;
    const copy = _.cloneDeep(this.getLikeSet());
    const newProps = copy.delete(userId);

    return new LikeSet(newProps);
  }

  private getLikeSet(): Set<UserId> {
    return this.likeSet;
  }
}
