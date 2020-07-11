import * as _ from 'lodash';
import UserId from '../UserId/UserId';
import { IFollower } from './IFollower';
import { deleteFromSet } from '../../../../util/Util';

export default class Follower implements IFollower {
  readonly follower: Set<UserId>;

  constructor(follower: Set<UserId>) {
    this.follower = follower;
  }

  private getFollower(): Set<UserId> {
    return this.follower;
  }

  followed(userId: UserId): Follower {
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
