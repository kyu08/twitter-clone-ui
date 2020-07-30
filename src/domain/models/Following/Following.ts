import * as _ from 'lodash';
import { IFollowing } from './IFollowing';
import UserId from '../User/UserId/UserId';
import { deleteFromSet } from '../../../util/Util';

export default class Following implements IFollowing {
  readonly userId: UserId;

  readonly following: Set<UserId>;

  constructor(userId: UserId, following: Set<UserId>) {
    this.userId = userId;
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

    return new Following(userId, copy);
  }

  unFollow(userId: UserId): Following {
    const copiedFollowing = _.cloneDeep(this.getFollowing());
    const updatedFollowing = deleteFromSet(copiedFollowing, userId);

    return new Following(userId, updatedFollowing);
  }
}
