import UserId from './UserId';

interface IFollowing {
  readonly following: Set<UserId>;
}

export default class Following implements IFollowing {
  readonly following: Set<UserId>;

  constructor(following: Set<UserId>) {
    this.following = following;
  }
}
