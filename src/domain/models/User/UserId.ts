interface IUserId {
  readonly userId: number;
}

export default class UserId implements IUserId {
  readonly userId: number;

  constructor(userId: number) {
    // if (userId.length < )
    this.userId = userId;
  }
}
