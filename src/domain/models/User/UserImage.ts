interface IUserImage {
  readonly userImage: string;
}

export default class UserImage implements IUserImage {
  readonly userImage: string;

  // todo validation どうやれば、、不要、、？
  constructor(userImage: string) {
    this.userImage = userImage;
  }
}
