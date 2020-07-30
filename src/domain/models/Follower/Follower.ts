import * as _ from 'lodash';
import { IFollower } from './IFollower';
import { deleteFromSet } from '../../../util/Util';
import UserId from '../User/UserId/UserId';

export default class Follower implements IFollower {
  readonly follower: Set<UserId>;

  constructor(follower: Set<UserId>) {
    this.follower = follower;
  }

  private getFollower(): Set<UserId> {
    return this.follower;
  }

  private isUserIdExist(userId: UserId): boolean {
    const following = this.getFollower();
    let isExist = false;
    following.forEach((u) => {
      if (u.userId === userId.userId) isExist = true;
    });

    return isExist;
  }

  followed(userId: UserId): Follower {
    if (this.isUserIdExist(userId)) return this;
    const copy = _.cloneDeep(this.getFollower());
    copy.add(userId);

    return new Follower(copy);
  }

  unFollowed(userId: UserId): Follower {
    const copiedFollowing = _.cloneDeep(this.getFollower());
    const updatedFollowing = deleteFromSet(copiedFollowing, userId);

    return new Follower(updatedFollowing);
  }
}
