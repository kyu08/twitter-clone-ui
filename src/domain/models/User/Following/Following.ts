import * as _ from 'lodash';
import UserId from '../UserId/UserId';
import { IFollowing } from './IFollowing';
import { deleteFromSet } from '../../../../util/Util';

export default class Following implements IFollowing {
  readonly following: Set<UserId>;

  constructor(following: Set<UserId>) {
    this.following = following;
  }

  private getFollowing(): Set<UserId> {
    return this.following;
  }

  private isUserIdExist(userId: UserId): boolean {
    const following = this.getFollowing();
    let isExist = false;
    following.forEach((u) => {
      if (u.userId === userId.userId) isExist = true;
    });

    return isExist;
  }

  follow(userId: UserId): Following {
    if (this.isUserIdExist(userId)) return this;
    const copy = _.cloneDeep(this.getFollowing());
    copy.add(userId);

    return new Following(copy);
  }

  unFollow(userId: UserId): Following {
    const copiedFollowing = _.cloneDeep(this.getFollowing());
    const updatedFollowing = deleteFromSet(copiedFollowing, userId);

    return new Following(updatedFollowing);
  }
}
