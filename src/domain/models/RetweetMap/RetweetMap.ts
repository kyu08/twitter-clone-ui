import * as _ from 'lodash';
// eslint-disable-next-line import/no-cycle
import { IRetweetMap } from './IRetweetMap';
import UserId from '../User/UserId/UserId';
import { TODO } from '../../../util/Util';

export default class RetweetMap implements IRetweetMap {
  // todo key はプリミティブにした方がいいかも
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

  private getRetweetMap(): Map<UserId, Date> {
    return this.retweetMap;
  }

  retweet(userId: UserId): RetweetMap {
    const copy = _.cloneDeep(this.getRetweetMap());
    const date = new Date();
    const newProps = copy.set(userId, date);

    return new RetweetMap(newProps);
  }

  cancelRetweet(userId: UserId): RetweetMap {
    // todo 判定本当に必要なのか検討
    if (!this.getRetweetMap().has(userId)) return this;
    const copy = _.cloneDeep(this.getRetweetMap());
    copy.delete(userId);

    return new RetweetMap(copy);
  }
}