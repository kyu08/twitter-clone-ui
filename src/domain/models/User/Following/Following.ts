import UserId from '../UserId/UserId';
import { IFollowing } from './IFollowing';

export default class Following implements IFollowing {
  readonly following: Set<UserId>;

  constructor(following: Set<UserId>) {
    this.following = following;
  }
}
