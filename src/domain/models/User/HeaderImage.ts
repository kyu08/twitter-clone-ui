interface IHeaderImage {
  readonly headerImage: string;
}

export default class HeaderImage implements IHeaderImage {
  readonly headerImage: string;

  constructor(headerImage: string) {
    this.headerImage = headerImage;
  }
}
