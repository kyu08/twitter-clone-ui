import UserId from './UserId';

interface IFollower {
  readonly follower: Set<UserId>;
}

export default class Follower implements IFollower {
  readonly follower: Set<UserId>;

  constructor(follower: Set<UserId>) {
    this.follower = follower;
  }
}
