import { IUserId } from './IUserId';

export default class UserId implements IUserId {
  readonly userId: number;

  // todo validation どうやれば、、不要、、？
  constructor(userId: number) {
    this.userId = userId;
  }
}
