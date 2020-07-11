interface IHeaderImage {
  readonly headerImage: string;
}

export default class HeaderImage implements IHeaderImage {
  readonly headerImage: string;

  // todo validation どうやれば、、不要、、？
  constructor(headerImage: string) {
    this.headerImage = headerImage;
  }
}
