import UserId from '../UserId/UserId';
import { IFollower } from './IFollower';

export default class Follower implements IFollower {
  readonly follower: Set<UserId>;

  constructor(follower: Set<UserId>) {
    this.follower = follower;
  }
}
