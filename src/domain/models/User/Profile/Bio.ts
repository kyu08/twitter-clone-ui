interface IBio {
  readonly bio: string;
}

const MAX_BIO_LENGTH = 10;

export default class Bio implements IBio {
  readonly bio: string;

  constructor(bio: string) {
    if (bio.length > MAX_BIO_LENGTH) throw new Error('Bio Length Error!');
    this.bio = bio;
  }

  static editBio(bio: string): Bio {
    return new Bio(bio);
  }
}
