interface IUserImage {
  readonly userImage: string;
}

export default class UserImage implements IUserImage {
  readonly userImage: string;

  constructor(userImage: string) {
    this.userImage = userImage;
  }
}
