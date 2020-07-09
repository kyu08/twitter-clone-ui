import * as _ from 'lodash';
import UserId from '../User/UserId';
import { TODO } from '../../../util/Util';

interface IRetweetMap {
  // todo ここ Date だと不十分？ 値オブジェクト作った方がいい？
  readonly retweetMap: Map<UserId, Date>;
}

export default class RetweetMap implements IRetweetMap {
  readonly retweetMap: Map<UserId, Date>;

  // 1. 新しい Tweet 用の空の Map を作成する
  // 2. JSON文字列だったやつをインスタンスとして復元する
  // 3. 更新したものをかえす
  constructor(
    retweetMapProp:
      | Map<UserId, Date>
      | TODO<'mapProps(JSON.parseしたやつ)'> = [],
  ) {
    if (retweetMapProp instanceof Map) this.retweetMap = retweetMapProp;
    this.retweetMap = new Map(retweetMapProp);
  }

  retweet(userId: UserId): RetweetMap {
    const copy = _.cloneDeep(this.get());
    const date = new Date();
    const newProps = copy.set(userId, date);

    return new RetweetMap(newProps);
  }

  cancelRetweet(userId: UserId): RetweetMap {
    // todo 判定本当に必要なのか検討
    if (!this.get().has(userId)) return this;
    const copy = _.cloneDeep(this.get());
    const newProps = copy.delete(userId);

    return new RetweetMap(newProps);
  }

  private get(): Map<UserId, Date> {
    return this.retweetMap;
  }
}
