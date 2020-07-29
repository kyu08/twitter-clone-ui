interface IUserName {
  readonly userName: string;
}

export const MAX_USER_NAME_LENGTH = 15;

export default class UserName implements IUserName {
  readonly userName: string;

  constructor(userName: string) {
    if (userName.length > MAX_USER_NAME_LENGTH)
      throw new Error('UserName Length Error!( > 15 )');
    this.userName = userName;
  }
}
