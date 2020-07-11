import * as _ from 'lodash';
import UserId from '../UserId/UserId';
// eslint-disable-next-line import/no-cycle
import { IFollowing } from './IFollowing';

export default class Following implements IFollowing {
  readonly following: Set<UserId>;

  constructor(following: Set<UserId>) {
    this.following = following;
  }

  private getFollowing(): Set<UserId> {
    return this.following;
  }

  follow(userId: UserId): Following {
    const copy = _.cloneDeep(this.getFollowing());
    copy.add(userId);

    return new Following(copy);
  }
}
