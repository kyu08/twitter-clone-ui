interface IUserName {
  readonly userName: string;
}

const MAX_USER_NAME_LENGTH = 10;

export default class UserName implements IUserName {
  readonly userName: string;

  constructor(userName: string) {
    if (userName.length > MAX_USER_NAME_LENGTH)
      throw new Error('UserName Length Error!');
    this.userName = userName;
  }
}
